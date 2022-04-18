import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";
const mockedSetCoordinates = jest.fn();
describe("SearchBar", () => {
  it("should be able to type into input", () => {
    render(<SearchBar setCoordinates={mockedSetCoordinates} />);
    const inputElement = screen.getByPlaceholderText(/Insert address.../i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "4600 Silver Hill Rd, Washington, DC 20233" },
    });
    const buttonElement = screen.getByRole("button", { name: /Search/i });
    fireEvent.click(buttonElement);
    expect(mockedSetCoordinates).toBeCalled();
  });
});
