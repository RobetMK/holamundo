import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: 35
        }
    }
    render() {
        return (
            <div>
                <h1>
                    Hola Sr: {this.props.name} !
                </h1>
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick = {this.birthday}>
                        cumpli años
                    </button>
                </div>
            </div>
        );
    }
    birthday = ()=>{
       // this.myAge ++;
        this.setState((prevState)=>(
            {
                age:prevState.age +1
            }
        ))
    }

}

Greeting.propTypes = {
    name:PropTypes.string,
}


export default Greeting;

