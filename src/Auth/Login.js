import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import { UserContext } from "../FinalContext/UserContext"
import axios from 'axios'
import "../aset/auth.css"

// const {userLists, setUserLists, loginStatus, setLoginStatus} = useContext()
const Login = () => {
    const history = useHistory()
    const {setLoginStatus} = useContext(UserContext)
    const [input, setInput] = useState({
        username:"",
        password:""
    })

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        setInput({...input, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        axios.post(`https://backendexample.sanbersy.com/api/user-login`, {
            email: input.email,
            password: input.password
        }).then ((res) => {
            let token = res.data.token
            let user = res.data.user
            console.log(res)
            Cookies.set('token', token, {expires:1})
            Cookies.set('name', user.name, {expires:1})
            Cookies.set('email', user.email, {expires:1})
            history.push('/')
        })
    }
    return (
        <div style={{backgroundColor:"#92ade0", height:"100vh"}}>
            <h1 style={{textAlign:"center", paddingTop:"25px", fontFamily:"Arial, Helvetica, sans-serif"}}>Masuk Ke Go-Vie </h1>
    <form onSubmit={handleSubmit} className="form-auth">
        <div className="input1" style={{display:"block"}}>
    <label className="label">Email</label> <br />
    <input className="input" type="text" name="email" value={input.email} onChange={handleChange}></input><br />
    <label className="label">Password</label><br />
    <input className="input" type="password" name="password" value={input.password} onChange={handleChange}></input><br />
    <button style={{backgroundColor: "#1d3e7d",  width:"100%", height:"50px", color:"white"}}>Login</button>
    </div>
    </form>
    
    </div>
    )
}

export default Login