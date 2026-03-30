import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class ContactUsClass extends Component
{
  constructor(props)
  {
    super(props);
    console.log(`First - Parent ${this.props.className} Constructor Called!!`);
  }

  componentDidMount()
  {
      console.log("Last - Parent Component Did Mount Called");
  }

  render()
  {
    console.log("Parent Render Called!!");
    return (
      <div>
        <h1>Contact Us :</h1>
        
        <User 
          component="Functional Component"
          location="Pune" />
        
        <UserClass 
          component="First Class Component"
          location= "Mumbai"/>
        
        <UserClass 
          component="Second Class Component"
          location= "Mumbai"/>
      </div>
    );
  }
}


export default ContactUsClass;