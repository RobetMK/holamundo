import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Gret extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : 35,
            likes:0
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¿Hola [ { this.props.name } ] ?
                </h1>
                <h2>
                    Tu edad es de: { this.state.age }
                </h2>
                <div>
                    <button onClick = {this.birthday}>
                        Compliraños
                    </button>
                    <button onClick={this.adLike}>
                        Likes { this.state.likes }
                    </button>
                </div>
            </div>
        );
    }
    adLike = ()=>{
        this.setState((prevState)=>({likes: prevState.likes +1}))
    }
    birthday = ()=>{
        this.setState((prevState)=>(
                {
                    age:prevState.age +1
                }
        ))
    }
}


Gret.propTypes = {
    name:PropTypes.string,
};


export default Gret;
