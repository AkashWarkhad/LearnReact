import React from "react";

/**
 * A class-based component is a React component defined using ES6 class syntax.
 * It extends React.Component and can manage its own state and lifecycle methods.
 * It has a render() method which returns JSX.
 */
class UserClass extends React.Component
{
    constructor(props) 
    {
        super(props);
        console.log("props: ", props);
    }

    render()
    {
        const {component, location} = this.props;

        return(
        <div className="userCard">
            <h2>Akash Warkhad from {component}</h2>
            <h3>Location : {location}</h3>
            <p>Email Address : helpdesk24by7@gamail.com</p>
        </div>)
    }
}

export default UserClass;