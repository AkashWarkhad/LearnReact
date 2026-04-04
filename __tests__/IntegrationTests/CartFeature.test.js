import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ShowCardData from "../../src/components/Restro/ShowCardData";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../src/utils/Redux/appStore";
import "@testing-library/jest-dom"
import Header from "../../src/components/Header";
import Cart from "../../src/components/Cart";

it("Should load restro menu component from ShowCardData", async () => 
{
    // Arrange
    await act(async () => render(
        <Provider store={appStore}>
            <BrowserRouter>
                <ShowCardData />
            </BrowserRouter>
        </Provider>
    ));

    // Act
    const accordionHeader = screen.getByText("South Indian (39)");
    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("foodItem");

    // Assert
    expect(accordionHeader).toBeInTheDocument();
    expect(foodItems).toHaveLength(39);
});

it("Should Add food item in the cart when we add the items from ShowCardData component", async () => 
{
    // Arrange
    await act(async () => render(
        <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <ShowCardData />
                </BrowserRouter>
        </Provider>
    ));

    
    const getAccordionHeader = screen.getByText("South Indian (39)");
    fireEvent.click(getAccordionHeader);

    const getFoodItemsFromDropDown = screen.getAllByTestId("foodItem");

    expect(getAccordionHeader).toBeInTheDocument();
    expect(getFoodItemsFromDropDown).toHaveLength(39);

    const addBtns = screen.getAllByRole("button", { name: "Add➕"});

    expect(addBtns).toHaveLength(39); 

    // Act
    // Add First item in the cart
    fireEvent.click(addBtns[0]);
    const cartItem1 = screen.getByText("🛒Cart(1 items)");

    // Add Second item in the cart
    fireEvent.click(addBtns[1]);
    const cartItem2 = screen.getByText("🛒Cart(2 items)");

    // Add Third item in the cart
    fireEvent.click(addBtns[2]);
    const cartItem3 = screen.getByText("🛒Cart(3 items)");

    // Assert
    expect(cartItem1).toBeInTheDocument();
    expect(cartItem2).toBeInTheDocument();
    expect(cartItem3).toBeInTheDocument();
});


it("Should display the food items in the cart when we add them", async () => 
{
    // Arrange
    await act(async () => render(
        <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <Cart />
                    <ShowCardData />
                </BrowserRouter>
        </Provider>
    ));

    const getAccordionHeader = screen.getByText("South Indian (39)");
    fireEvent.click(getAccordionHeader);

    const getFoodItemsFromDropDown = screen.getAllByTestId("foodItem");

    expect(getAccordionHeader).toBeInTheDocument();
    expect(getFoodItemsFromDropDown).toHaveLength(39);

    const addBtns = screen.getAllByRole("button", { name: "Add➕"});

    expect(addBtns).toHaveLength(39); 

    // IMP : Clear Cart before testing
    const beforeClearCartBtn = screen.getByRole("button", { name: "Clear Cart"});
    fireEvent.click(beforeClearCartBtn);

    // Act
    // Add First item in the cart
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);
    fireEvent.click(addBtns[2]);
    
    const cartHeader = screen.getByText("🛒Cart(3 items)");

    // Assert
    expect(cartHeader).toBeInTheDocument();

    const cartItems = screen.getAllByTestId("cartItem");

    expect(cartItems).toHaveLength(3);

    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart"});
    fireEvent.click(clearCartBtn);

    expect(
        screen.getByText("Cart is empty. Add items in the cart!!")
    ).toBeInTheDocument();
});