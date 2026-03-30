import React from "react";

/**
 * A class-based component is a React component defined using ES6 class syntax.
 * It extends React.Component and can manage its own state and lifecycle methods.
 * It has a render() method which returns JSX.
 */
class UserClass extends React.Component
{
    // Props in React are read-only and cannot be modified directly by a component. They are passed from parent to child, 
    // and any updates must be handled in the parent component using state. 
    constructor(props) 
    {
        super(props);
        console.log(props);

        // Declaration fields in class based component
        this.state = 
        {
            count: 1,
            mobNo: "9743483**8"
        }

        // Not recommened move details under state object if you want to update value as its not posible now.
        this.details = "Avail 24 X 7 on Mon to Fri. Sat Sun is Off."
        console.log(`${this.props.component} Child Constructor called!!`);
    }

    // componentDidMount is nothing but the useEffect() Hook Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    // LifeCycle : Constructor => Render(Child Render: (Parent -> Render -> DidMount)) => Component Did Mount
    componentDidMount()
    {
        console.log(`${this.props.component} Child Component Did Mount Called`);

        // Make a API call to fill the data in the page
    }
    

    render()
    {
        console.log(`${this.props.component} Child Render Called!!`);

        const {component, location} = this.props;

        return(
        <div className="userCard">

            <h2>Akash Warkhad from {component}</h2>
            <h3>{this.state.count} Location : {location}</h3>
            <p>Email Address : helpdesk24by7@gamail.com</p>
            <p>Mobile No : {this.state.mobNo}</p>

            <button onClick={()=>
            {
                // Never update the count like this, it will not work
                //this.state.count = this.state.count + 1;

                // setState only update the data which is included in the object. Others will stay as it is unchanged.
                this.setState(
                {
                    count : this.state.count + 1
                });
            }}>Inc Count {this.state.count}</button>

            <p>Note : {this.details}</p>
        </div>)
    }
}

export default UserClass;