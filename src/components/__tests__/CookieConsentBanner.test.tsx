import type React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CookieConsentBanner } from "../CookieConsentBanner";

jest.mock("next/script", () => {
  return function MockScript({
    children,
    id,
    src,
  }: {
    children?: React.ReactNode;
    id?: string;
    src?: string;
  }) {
    return (
      <script data-testid={id ?? "external-script"} src={src}>
        {children}
      </script>
    );
  };
});

describe("CookieConsentBanner", () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_GA_ID = "G-TEST";
    window.localStorage.clear();
  });

  it("shows the banner until analytics cookies are accepted", async () => {
    const user = userEvent.setup();

    render(<CookieConsentBanner />);

    expect(await screen.findByText(/cookie preferences/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /accept/i }));

    await waitFor(() => {
      expect(screen.queryByText(/cookie preferences/i)).not.toBeInTheDocument();
    });
    expect(window.localStorage.getItem("binbot_cookie_consent")).toBe(
      "accepted",
    );
    expect(screen.getByTestId("ga-init")).toBeInTheDocument();
  });

  it("keeps analytics scripts disabled when rejected", async () => {
    const user = userEvent.setup();

    render(<CookieConsentBanner />);

    await user.click(await screen.findByRole("button", { name: /reject/i }));

    await waitFor(() => {
      expect(screen.queryByText(/cookie preferences/i)).not.toBeInTheDocument();
    });
    expect(window.localStorage.getItem("binbot_cookie_consent")).toBe(
      "rejected",
    );
    expect(screen.queryByTestId("ga-init")).not.toBeInTheDocument();
  });
});
