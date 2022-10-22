import React, { Component } from 'react'
import Input from '../components/Input'
import { login } from '../api/apiCalls'

export default class LoginPage extends Component {

state={
    username:null,
    password:null
}

onChange=event=>{

    const {name , value}=event.target
    this.setState({
        [name]:value
    })

}

onClickLogin=event=>{
  event.preventDefault();  

  const {username,password}=this.state

  const creds={
    username:username,
    password:password
  }
  login(creds)
}

  render() {
    return (
      <div className='container'>
        <h1>Login</h1>
        <form >
        <Input  label="User Name" name="username" onChange={this.onChange} />
        <Input  label="Password" name="password" type="password" onChange={this.onChange} />
        <button className='btn btn-primary' onClick={this.onClickLogin}>Login</button>
        </form>
     

      </div>
    )
  }
}
