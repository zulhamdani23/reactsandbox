import React from "react"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import Sidebar from '../Component/Sidebar'

const LayoutComponent = (props) => {

    return (
        <>
            <Navbar />
            
            
            <div >
                <div className="section">
                    {props.content}
                </div>
            </div>
            
           <Footer />
        </>
    )

}

export default LayoutComponent