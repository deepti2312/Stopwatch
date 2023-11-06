import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { MyNavbar } from "../App";


test("Navbar and icons rendered successfully.", () => {

    const { getByTestId } = render(
        <MemoryRouter>
            <MyNavbar />
        </MemoryRouter>
    )
    expect(getByTestId('clock-link')).toBeInTheDocument()
    expect(getByTestId('stopwatch-link')).toBeInTheDocument()

})

