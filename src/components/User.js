import { useState } from "react";

//const User = (props)=> {
const User = ({name, age})=> {
    const [count1, setCount1] = useState(0)
    const [count2] = useState(2)
    return(
        <div className="user-card">
            <h2>Count: {count1} & Count2: {count2}</h2>
            <button onClick={() => setCount1(count1 + 1)}>Increment Count1</button>
            {/* <h2>Name: {props.name} - Age: {props.age}</h2> */}
            <h2>Name: {name} - Age: {age}</h2>
            <h2>Location: Hyderabad</h2>
            <h3>Contact: 1234567890</h3>
        </div>
    );
};
export default User;