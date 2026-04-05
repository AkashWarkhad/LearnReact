import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../../src/components/Header"
import { Provider } from "react-redux";
import appStore from "../../src/utils/Redux/appStore";
import UserContext from "../../src/utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("Should load header component with login button", () => 
{
    // Arrange
    render(
        <BrowserRouter>
            <Provider store={appStore}>

                <UserContext.Provider value={{loggedInUser : "test"}}>
                    <Header />
                </UserContext.Provider>  

            </Provider>  
        </BrowserRouter>
    );

    // Act
    const loginBtnByRole = screen.getByRole("button");

    const loginbtnByText = screen.getByText("Login");

    const loginBtnByRoleAndNameText = screen.getByRole("button", { name: "Login"});

    // Assert

    expect(loginBtnByRole).toBeInTheDocument();
    expect(loginbtnByText).toBeInTheDocument();
    expect(loginBtnByRoleAndNameText).toBeInTheDocument();
});

it("Should render the header component with Cart Item 0", () => 
{
    // Arrange
    render(
        <BrowserRouter>
            <Provider store={appStore}>

                <UserContext.Provider value={{loggedInUser : "test"}}>
                    <Header />
                </UserContext.Provider>  

            </Provider>  
        </BrowserRouter>
    );

    // Act
    const cartByText = screen.getByText("🛒Cart(0 items)");
    const cartByRegexText = screen.getByText(/Cart/);


    // Assert

    expect(cartByText).toBeInTheDocument();
    expect(cartByRegexText).toBeInTheDocument();
});

it("Should change login button to logout on click", () => 
{
    // Arrange
    render(
        <BrowserRouter>
            <Provider store={appStore}>

                <UserContext.Provider value={{loggedInUser : "test"}}>
                    <Header />
                </UserContext.Provider>  

            </Provider>  
        </BrowserRouter>
    );

    // Act 
    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { name: "Logout" });

    // Assert

    expect(loginBtn).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
});