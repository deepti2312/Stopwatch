import { fireEvent, render } from "@testing-library/react";
import { Currenttime, Stopwatch } from "../Component";
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test("Rendered TimeZone Successfully.", () => {
    render(<Currenttime />);
    const zoneElement = screen.getByText("Asia/Kolkata");
    expect(zoneElement).toBeInTheDocument();
});

test("Rendered Time successsfully.", () => {
    render(<Currenttime />);
    const timeElement = screen.getByText(/(\d{1}|\d{2}):\d{2}:\d{2} (AM|PM)/i);
    expect(timeElement).toBeInTheDocument();
});

test("Rendered Stopwatch Successfully.", () => {
    render(<Stopwatch />);
    const stopwatchElem = screen.getByText("0:00:00:00");
    expect(stopwatchElem).toBeInTheDocument();
});

// test by giving a id to the Button. 
test("Rendered Start Button Successfully", () => {
    render(<Stopwatch />);
    const startBtn = screen.getByTestId("startButton")
    expect(startBtn).toBeInTheDocument()

})

test("Rendered Reset Button Successfully", () => {
    render(<Stopwatch />);
    const resetBtn = screen.getByTestId("resetButton")
    expect(resetBtn).toBeInTheDocument()

})

// test by Button Name. 
test("Rendered Reset Button Successfully", () => {
    render(<Stopwatch />);
    const start = screen.getByText("start")
    expect(start).toBeInTheDocument()

})

test('Previous button should be disabled on first page', () => {
    const { getByTestId } = render(<Currenttime />);
    expect(getByTestId("pre-button")).toBeDisabled();
})

test('Next & Previous button should not be disabled on mid of the pages', () => {
    const { getByTestId } = render(<Currenttime />);
    expect((getByTestId("pre-button") && getByTestId("last-button"))).not.toBeDisabled();
})

test("Next button should be disabled on last page", () => {
    const { getByTestId } = render(<Currenttime />);
    expect(getByTestId("last-button")).not.toBeDisabled();
})
