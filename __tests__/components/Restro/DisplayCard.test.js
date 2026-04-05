import { render, screen } from "@testing-library/react";
import DisplayCard, { UpdatedDisplayCard } from "../../../src/components/Restro/DisplayCard";
import "@testing-library/jest-dom"
import DisplayCardComponentParam_MockData from "./RestroMocks/displayCardComponentParam.json"

it("Should render restaurent card component with props data", () => 
{
    // Arrange
    //Note : DisplayCardComponentParam_MockData is json & comming from the RestroMocks & file is json no needs to export as well.
    render(<DisplayCard params={DisplayCardComponentParam_MockData}/>);

    // Act
    const name = screen.getByText("Fish Curry Rice");

    // Assert
    expect(name).toBeInTheDocument();
});

it("Should render RestroCard component with Promoted label", () => 
{
    // Arrange
    const UpdatedCardWithPromoted = UpdatedDisplayCard(DisplayCard);

    //Note : DisplayCardComponentParam_MockData is json & comming from the RestroMocks & file is json no needs to export as well.
    render(<UpdatedCardWithPromoted params={ DisplayCardComponentParam_MockData }/>);

    // Act
    const label = screen.getByText("Promoted");

    // Assert
    expect(label).toBeInTheDocument();
});