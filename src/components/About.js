import User from "./User";
import UserClass from "./UserClass";

const About = () => {
return (
    <div>
        <h1>About Us</h1>
        <p>This is a food delivery app. We deliver food at your doorstep.</p>
        <User name="Alice" age={25} />
        <UserClass name="Bob" age={30} />
    </div>
)
}

export default About;