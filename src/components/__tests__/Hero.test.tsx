import { fireEvent, render, screen } from "@testing-library/react";
import { Hero } from "../Hero";
import { trackCTA } from "@/lib/analytics";

jest.mock("@/lib/analytics", () => ({
  trackCTA: jest.fn(),
}));

describe("Hero", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the main hero message and tracks CTA clicks", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /algorithmic alpha in digital assets/i,
        level: 1,
      }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("link", { name: /schedule a call/i }));
    fireEvent.click(screen.getByRole("link", { name: /view strategy/i }));

    expect(trackCTA).toHaveBeenCalledWith("Schedule a Call", "hero");
    expect(trackCTA).toHaveBeenCalledWith("View Strategy", "hero");
  });
});
