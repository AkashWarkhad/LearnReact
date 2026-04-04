import { prettyDOM, render, screen } from "@testing-library/react";
import About from "../../src/components/About";
import "@testing-library/jest-dom"

// Note : You can use test or it both works
describe("About Component Test Cases", () => 
{
    test("About component should load succesfully.", () => 
    {
        // Arrange & Act
        render(<About />);

        const heading = screen.getByRole("heading", 
        {
            // This / Regex /i <- Case Insensitive
            name: /this is about react fundamentals/i,
        });

        const heading2 = screen.getByText(/this is about react fundamentals/i);


        // Assert
        expect(heading).toBeInTheDocument();
        expect(heading2).toBeInTheDocument();
    });

    test("Button should be rendered in the About component", () => 
    {
        // Arrange & Act
        render(<About />);

        const button = screen.getByRole("button");
        const buttonByText = screen.getByText("ClickMeForMoreInfo");


        // Assert
        expect(button).toBeInTheDocument();
        expect(buttonByText).toBeInTheDocument();
    });

    // To check the div is not recommaned as div is not a role.
    it("Should load all div in the component", () => 
    {
        // Arrange & Act
        const {container} = render(<About />);

        console.log(prettyDOM(container));

        const div = container.querySelectorAll("div");
        
        //Assert
        expect(div).toHaveLength(1);
    });
});

