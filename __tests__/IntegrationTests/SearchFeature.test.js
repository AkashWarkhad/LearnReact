import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../../src/components/Body";
import "@testing-library/jest-dom"
import SearchFeatureTestData from "./MockData/SearchFeatureTestData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>
{
    return Promise.resolve(
    {
        json : () => 
        {
            return Promise.resolve(SearchFeatureTestData);
        }
    });
});

it("Should search for Coffe & render the body component with searched filtered data.", async () => 
{
    // Arrange
    // This is global fetch which override the existing fecth & return the mocked data from the folder
    // As you can see source code we have to Promises fech & Json so we have 2 promises here in the fn()
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>));

    const searchBtn = screen.getByRole("button", { name: "Search"});
    const searchInput = screen.getByTestId("searchInput");

    // Assert that initially all 20 cards should loads before search
    const restroCardBeforeSearch = screen.getAllByTestId("restroCard");
    expect(restroCardBeforeSearch).toHaveLength(20);

    // Act
    fireEvent.change(searchInput, { target : { value: "coffe" }});
    fireEvent.click(searchBtn);

    // Assert
    expect(searchBtn).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();

    // Assert that screen should load 2 restro card against Coffe Search
    const restroCardAfterSearch = screen.getAllByTestId("restroCard");
    expect(restroCardAfterSearch).toHaveLength(2);
});


it("Should filter top rated restro when cliked filter button.", async () => 
{
    // Arrange
    // This is global fetch which override the existing fecth & return the mocked data from the folder
    // As you can see source code we have to Promises fech & Json so we have 2 promises here in the fn()
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>));

    // Assert that initially all 20 cards should loads before search
    const restroCardBeforeSearch = screen.getAllByTestId("restroCard");
    expect(restroCardBeforeSearch).toHaveLength(20);

    const filterBtn = screen.getByRole("button", { name: "Filter Top Rated Restaurants"});

    // Act
    fireEvent.click(filterBtn);

    // Assert
    expect(filterBtn).toBeInTheDocument();

    // Assert that screen should load 2 restro card against Coffe Search
    const restroCardAfterFilter = screen.getAllByTestId("restroCard");
    expect(restroCardAfterFilter).toHaveLength(9);
});


