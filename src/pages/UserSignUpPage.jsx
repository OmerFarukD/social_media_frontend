import React, { Component } from "react";
import {signUp} from  "../api/apiCalls"

export default class UserSignUpPage extends Component {
state={
  username:null,
  displayName:null,
  password:null,
  pendingApiCall:false
}
  


 
  onChange=event=>{
    // const value=event.target.value
    // const name=event.target.name

    const {name,value}=event.target
    this.setState({
      [name] :value
    })
  } 
   
  onClickSignUp=async event=>{

    const {username,password}=this.state
    event.preventDefault()
    const body={
      username,
      displayName:this.state.displayName,
      password
    }
    
    try {
      const response= await signUp(body)
      this.setState({pendingApiCall:true})
    } catch (error) {
    
    }
    this.setState({pendingApiCall:false})
  }
  render() {
    return (

      <div className="container">
        <form>
        <h1 className="text-center">Sign up</h1>
        <div className="form-group">
          <label>UserName</label>
          <input name="username" className="form-control" type="text" placeholder="Username" onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label>Display Name</label>
          <input name="displayName" type="text"className="form-control" placeholder="Display name" onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input name="password" type="password"className="form-control" placeholder="Password" onChange={this.onChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="">Password Repeat</label>
          <input name="passwordrepeat" type="password"className="form-control" placeholder="Password" onChange={this.onChange}/>
        </div>
        <button className="btn btn-primary" onClick={this.onClickSignUp} disabled={this.state.pendingApiCall}>Sign up
        {this.state.pendingApiCall && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
        </button>
      </form>
      </div>
      
    )
  }
}
