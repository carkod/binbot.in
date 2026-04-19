import { render, screen } from "@testing-library/react";
import { SectionHeader } from "../SectionHeader";

describe("SectionHeader", () => {
  it("renders the subtitle, title, description, and left alignment option", () => {
    render(
      <SectionHeader
        subtitle="Overview"
        title="Section Title"
        description="Helpful supporting copy."
        align="left"
      />,
    );

    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /section title/i, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/helpful supporting copy/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /section title/i, level: 2 })
        .parentElement?.parentElement,
    ).toHaveClass("text-left");
  });
});
