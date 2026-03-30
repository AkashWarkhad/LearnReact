const User = ({component, location})=> 
{
    return(
        <div className="userCard">
            <h2>Akash Warkhad from {component}</h2>
            <h3>Location : {location}</h3>
            <p>Email Address : helpdesk24by7@gamail.com</p>
        </div>
    );
}

export default User;