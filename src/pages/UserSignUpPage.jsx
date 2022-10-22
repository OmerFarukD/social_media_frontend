import React, { Component } from "react";
import { signUp } from "../api/apiCalls";
import Input from "../components/Input";


export default class UserSignUpPage extends Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    pendingApiCall: false,
    errors: {},
  };

  onChange = (event) => {
 
    const { name, value } = event.target;
    const errors={...this.state.errors}
    errors[name]=undefined
    
    if(name==="password" || name==="passwordrepeat"){
      if(name==="password" && value !==this.state.passwordRepeat){
        errors.passwordRepeat="password mismatch"
      }else if(name==="passwordrepeat" && value !==this.state.password){
        errors.passwordRepeat="password mismatch";
      }
      else{
        errors.passwordRepeat=undefined;
      }
    }
    
    this.setState({
      [name]: value,errors
    });
  };

  onClickSignUp = async (event) => {
    const { username, password,displayName } = this.state;
    event.preventDefault();
    const body = {
      username,
      displayName,
      password,
    };

    try {
      const response = await signUp(body);
      this.setState({ pendingApiCall: true });
    } catch (error) {
     
    //  console.log((error.response || {}).data);
     if((error.response).data.validationErrors){
      this.setState({ errors: (error.response).data.validationErrors });
     }
      
    }
    this.setState({ pendingApiCall: false });
  };
  render() {
    const {pendingApiCall,errors}=this.state
    const {username,displayName,passwordRepeat}=errors
    return (
      <div className="container">
        <form>
          <h1 className="text-center">Sign up</h1>
          <Input name="username" label="Username" error={username} onChange={this.onChange} placeholder="User name" type="text"/>
          <Input name="displayName" label="Display Name" error={displayName} onChange={this.onChange} placeholder="display Name"type="text" />
          <Input name="password" label="Password" onChange={this.onChange} error={passwordRepeat} placeholder="password" type="password"/>
          <Input name="passwordrepeat" label="Password Repeat" onChange={this.onChange} placeholder="password repeat" type="password"/>
       

          <button
            className="btn btn-primary"
            onClick={this.onClickSignUp}
            disabled={pendingApiCall || passwordRepeat!==undefined}
          >
            Sign up
            {pendingApiCall && 
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            }
          </button>
        </form>
      </div>
    );
  }
}
