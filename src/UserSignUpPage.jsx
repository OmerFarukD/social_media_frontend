import React, { Component } from "react";
import axios from "axios";

export default class UserSignUpPage extends Component {
state={
  username:null,
  displayName:null,
  password:null
}
  


 
  onChange=event=>{
    const value=event.target.value
    const name=event.target.name
    this.setState({
      [name] :value
    })
  }

  onClickSignUp=event=>{
    event.preventDefault()
    const body={
      username: this.state.username,
      displayName:this.state.displayName,
      password:this.state.password
    }
    

    
    axios.post("http://localhost:8080/api/1.0/user/createuser",body)
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
          <input name="displayname" type="text"className="form-control" placeholder="Display name" onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input name="password" type="password"className="form-control" placeholder="Password" onChange={this.onChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="">Password Repeat</label>
          <input name="passwordrepeat" type="password"className="form-control" placeholder="Password" onChange={this.onChange}/>
        </div>
        <button className="btn btn-primary" onClick={this.onClickSignUp} >Sign Up</button>
      </form>
      </div>
      
    )
  }
}
