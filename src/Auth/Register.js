import React, {useState, useContext} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import { UserContext } from "../FinalContext/UserContext"
import "../aset/auth.css"

const Register = () => {
    const history = useHistory()
    const [input, setInput] = useState({name : '', email:'', password:''})

    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(input)
        axios.post(`https://backendexample.sanbersy.com/api/register`, {
            name: input.name,
            email: input.email,
            password: input.password
        }).then (() => {
            history.push('/login')
        })
    } 

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        setInput({...input, [name] : value})
    }
     return (
        <>
            <div style={{backgroundColor:"#92ade0", height:"100vh"}}>
            <h1 style={{textAlign:"center", paddingTop:"25px", fontFamily:"Arial, Helvetica, sans-serif"}}>Daftar Dulu</h1>
                <form onSubmit={handleSubmit} className="form-auth">
                <div className="input1" style={{display:"block"}}>
                    <label className="input" className="label">Name:</label> <br />
                    <input type="text" name="name" value={input.name} onChange={handleChange}></input>
                    <br />
                    <label className="label">Email: </label><br />
                    <input className ="input" type="text" name="email" value={input.email} onChange={handleChange}></input>
                    <br />
                    <label className="label">Password: </label><br />
                    <input className ="input" type="text" name="password" value={input.password} onChange={handleChange}></input>
                    <br />
                    <button style={{backgroundColor: "#1d3e7d", width:"100%", height:"50px", color:"white"}}>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register