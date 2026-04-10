import { prettyDOM, render, screen } from "@testing-library/react";
import About from "../../src/components/About";
import "@testing-library/jest-dom"



/**
    ● (Framework) Jest = Test Runner + Assertions Developed by meta/facebook
        - Run tests
        - Assertions
        - Mocking
        - Coverage reports
    ● (Library)RTL = UI Testing Tool
        - Testing UI
        - DOM querying
        - Rendering components

In the test we have this comes from
    ● test() → from Jest
    ● expect() → from Jest
    ● render() → from RTL
    ● screen.getByText() → from RTL

    Jest is a testing framework used to run tests, provide assertions, mocking, and coverage
    reports, while React Testing Library is a utility used to render components and test UI
    behavior from the user’s perspective. Jest handles test execution, and React Testing
    Library helps interact with the DOM. Both are used together to provide a complete testing
    solution in React applications.
 */



// Note : You can use test or it both works
describe("About Component Test Cases", () => 
{
    beforeAll(() => {
        console.log("Run before All Test");
    });

    beforeEach(() => {
        console.log("Run before each tests");
    });

    afterAll(()=> {
        console.log("Run After All.");
    });

    afterEach(()=> {
        console.log("Run After each tests");
    });

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
        expect(heading2).toMatchSnapshot();
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