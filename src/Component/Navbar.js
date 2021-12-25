import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Logo from "../assets/img/logo.png"
import { MobileAppContext } from "../Context/MobileAppContext"

const Navbar = () => {
    let history = useHistory()
    const {searchStatus, setSearchStatus} = useContext(MobileAppContext)
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchStatus(true)
        setSearch("")
        history.push(`/search/${search}`)
    }

    return (
        <>
            <div className="topnav">
                <Link to="/">
                    <img src={Logo} width="70" />
                </Link>
                <Link to="/">Home</Link>
                <Link to="/mobile-list">Mobile List</Link>
                <Link to="/about">About</Link>
                <form method="POST" onSubmit={handleSearch}>
                    <input type="text" onChange={handleChange} value={search}/>
                    <input type="submit" value="Cari" />
                </form>
            </div>
        </>
    )
}

export default Navbar