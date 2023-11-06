import React from "react";
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from "react-router-dom";
import App from "../App";
import { render } from "@testing-library/react";
import { MyNavbar } from "../App";

const renderWithrouter = (component) => {
    const history = createMemoryHistory()

    return {
        ...render(
            <Router history={history}>
                {component}
            </Router>
        )
    }
}

test("nav bar rendered successfully.", ()=> {
    
    render(
        <MemoryRouter>
            <MyNavbar />
        </MemoryRouter>
    )
})
