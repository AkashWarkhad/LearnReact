import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class ContactUsClass extends Component
{
  constructor(props)
  {
    super(props);
    console.log(`First - Parent ${this.props.className} *Constructor* Called!!`);
  }

  componentDidMount()
  {
      console.log("Last - Parent *ComponentDidMount* Called");
  }

  render()
  {
    console.log("Parent *Render* Called!!");
    return (
      <div>
        <h1>Contact Us :</h1>
        
        <UserClass 
          component="ClassBased Component"
          location= "Mumbai"/>

          <User 
            component="Functional Component"
            location="Pune" />
      </div>
    );
  }
}


export default ContactUsClass;