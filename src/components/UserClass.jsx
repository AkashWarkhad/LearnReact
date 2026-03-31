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
            mobNo: "474**83**8",
            
            userInfo :{} // Updated data in the ComponentDidMount
        }

        // Not recommened move details under state object if you want to update value as its not posible now.
        this.details = "Avail 24 X 7 on Mon to Fri. Sat Sun is Off."

        console.log(`${this.props.component} Child *Constructor* called!!`);
    }

    // componentDidMount is nothing but the useEffect() Hook Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    // LifeCycle : Constructor => Render(Child Render: (Parent -> Render -> DidMount)) => Component Did Mount
    async componentDidMount()
    {
        console.log(`${this.props.component} Child *ComponentDidMount* Called`);

        // Make a API call to fill the data in the page
        const data = await fetch("https://api.github.com/users/akashwarkhad");
        const json = await data.json();
        console.log(json);

        // Update the userInfo with Api output
        this.setState({ userInfo: json });

        // This Calls every 1 second & stored in the timer so later on we can clear the setInterval
        this.timer = setInterval(()=> 
        {
            console.log("DidMount Called");
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState)
    {
        // This is for State values updates
        if(prevState.count === this.state.count )
        {
            console.log(`Count is not changed for ${prevState.count}`);
        }
        else{
            console.log(`Count is changed from ${prevState.count} to ${this.state.count}`);
        }

        // This is for the Props values updates
        if(prevProps.component === this.props.component)
        {
            console.log(`props is not changed for ${prevProps.component}`);
        }
        else{
            console.log(`props is changed from ${prevProps.component} to ${this.props.component}`);
        }
        
        console.log(`${this.props.component} Child *ComponentDidUpdate* Called!!`);
    }

    // Called immediately before a component is destroyed. Perform any necessary cleanup in this method, 
    // such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
    componentWillUnmount()
    {
        console.log(`${this.props.component} Child *ComponentWillUnmount* Called!!`);
        clearInterval(this.timer);
    }
    

    render()
    {
        console.log(`${this.props.component} Child *Render* Called!!`);

        const {component, location} = this.props;
        const {id, login, avatar_url, repos_url} =  this.state.userInfo;
        return(
        <div className="userCard">

            <img src={avatar_url}></img>
            <h2>{login} From {component}</h2>
            <h3>{this.state.count} Location : {location}</h3>
            <p>Email Address : helpdesk24by7@gamail.com</p>
            <p>Mobile No : {this.state.mobNo}</p>
            <p>Repository : {repos_url}</p>

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