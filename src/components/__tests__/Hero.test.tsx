import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Hero } from "../Hero";
import { trackCTA } from "@/lib/analytics";

jest.mock("@/lib/analytics", () => ({
  trackCTA: jest.fn(),
}));

describe("Hero", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the main hero message and tracks CTA clicks", async () => {
    const user = userEvent.setup();

    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /algorithmic alpha in digital assets/i,
        level: 1,
      }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: /schedule a call/i }));
    await user.click(screen.getByRole("link", { name: /view strategy/i }));

    expect(trackCTA).toHaveBeenCalledWith("Schedule a Call", "hero");
    expect(trackCTA).toHaveBeenCalledWith("View Strategy", "hero");
  });
});
