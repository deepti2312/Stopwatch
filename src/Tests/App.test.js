import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { MyNavbar } from "../App";


test("nav bar rendered successfully.", () => {

    render(
        <MemoryRouter>
            <MyNavbar />
        </MemoryRouter>
    )
})
