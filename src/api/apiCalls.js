import axios from "axios"

export const signUp=(body)=>{
return    axios.post("http://localhost:8080/api/1.0/user/createuser",body)
}

export const login=creds=>{
    return axios.post("http://localhost:8080/api/1.0/auth",{},{auth:creds})
}