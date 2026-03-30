import User from "./User"
import UserClass from "./UserClass"

const ContactUs = () => 
{
  return (
    <div>
      <h1>Contact Us :</h1>
      
      <User 
        component="Functional Component"
        location="Pune" />
      
      <UserClass 
        component="Class Component"
        location= "Mumbai"/>
    </div>
  )
}

export default ContactUs