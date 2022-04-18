import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
describe("Navbar", () => {
  it("should render navbar", () => {
    render(<Navbar />);
    const titleNav = screen.getByText(/I-Weather/i);
    expect(titleNav).toBeInTheDocument();
  });
});
