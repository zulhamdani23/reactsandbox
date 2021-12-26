import React from 'react'
import Logo from '../aset/Logo.png'

const About = () => {
    return (
        <div  style={{backgroundColor:"#92ade0", height:"100vh"}}>
            <h1 style={{textAlign:"center", paddingTop:"25px", fontFamily:"Arial, Helvetica, sans-serif"}}> Go-Vie </h1>
            <div>
                <img src={Logo} />
                <p style={{ fontFamily:"Arial, Helvetica, sans-serif"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque magnam impedit aliquam est, eum fugiat amet, dolor maiores similique odio, ipsam possimus?</p>
            </div>
        </div>
    )
}

export default About