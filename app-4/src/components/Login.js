import React, {Component} from 'react';

class Login extends Component{
    
    constructor () {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.login = this.login.bind(this);
    }

    handleUsername(username){
        this.setState({username: username});
    }
    
    handlePassword(password){
        this.setState({password: password});
    }

    login(){
        window.alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render(){
        return(
            <div>
                <input onChange={e => this.handleUsername(e.target.value)} type='text'/>
                <input onChange={e =>this.handlePassword(e.target.value)} type='text'/>
                <button onClick={this.login}>Login</button>
            </div>     
        )
    }
}

export default Login;