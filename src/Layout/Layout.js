import React from "react"
import Navbar from "../Component/Navbar"
// import Footer from "../Component/Footer"

const LayoutComponent = (props) => {

    return (
        <>
            <Navbar />
            <div className="row">
                <div className="section">
                    {props.content}
                </div>
            </div>
            // <Footer />
        </>
    )

}

export default LayoutComponent