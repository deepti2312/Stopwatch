import { render } from "@testing-library/react";
import { Navbar } from "../Navbar";
import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";

test('rendered clock icon successfully', () => {
    const {getByTestId} = render(<Navbar />);
    // const icon = screen.getByTestId("clock-icon");
    expect(getByTestId("clock-icon")).toBeInTheDocument();
})
