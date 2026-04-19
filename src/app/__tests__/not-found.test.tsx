import { render, screen } from "@testing-library/react";
import NotFound from "../not-found";

describe("NotFound route", () => {
  it("renders the 404 state", () => {
    render(<NotFound />);

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText(/this page doesn't exist/i)).toBeInTheDocument();
  });
});
