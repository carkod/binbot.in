import { render, screen } from "@testing-library/react";
import { FadeIn } from "../FadeIn";

describe("FadeIn", () => {
  it("renders children inside the provided wrapper class", () => {
    const { container } = render(
      <FadeIn className="custom-fade-wrapper">
        <span>Animated child</span>
      </FadeIn>,
    );

    expect(screen.getByText("Animated child")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("custom-fade-wrapper");
  });
});
