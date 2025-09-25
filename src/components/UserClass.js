import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count1:0,
            count2:2
        }
    }
    render(){
        const{name, age} = this.props;
        return(
            <div className="user-card">
                <button onClick={
                    ()=> this.setState(
                        {count1: this.state.count1 + 1}
                    )
                }>Increment count</button>
                <h2>Count1: {this.state.count1}</h2>
                <h2>Count2: {this.state.count2}</h2>
            <h2>Name: {name} - Age:{age}</h2>
            <h2>Location: Hyderabad</h2>
            <h3>Contact: 1234567890</h3>
        </div>
        );
    }
}
export default UserClass;