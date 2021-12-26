import axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import { useParams, useLocation } from "react-router";
import {MovieContext} from '../FinalContext/MovieContext';

const Search = () => {
    let {valueOfSearch} = useParams()
    const pathName = useLocation().pathname
    const { searchStatus, setSearchStatus } = useContext(MobileAppContext)
    const [ searchData , setSearchData ] = useState([])

    useEffect(() => {

        const fetchSearch = async() => {
            let url = ""
            if (pathName === '/movie-list') {
                url = `https://backendexample.sanbersy.com/api/data-movie`
            } else {
                url = `https://backendexample.sanbersy.com/api/data-game`
            }
            let result = await axios.get(url)
            let resultData = result.data
            let filterData = resultData.filter((e) => {
                return Object.values(e).join(" ").toLowerCase().includes( valueOfSearch.toLowerCase() )
            })

            setSearchData([ ...filterData ])
        }


        if(searchStatus){
            fetchSearch()
            setSearchStatus(false)
        }

    },[searchStatus, setSearchStatus])


    return (
        <>
            <div className="card">
                {searchData !== null && (
                    <>
                        {searchData.map((e) => {
                            return (
                                <div>
                                    <h2>{e.name}</h2>
                                    <h5>Release Year : {e.release_year}</h5>
                                    <img className="fakeimg" style={{ width: "50%", height: "300px", objectFit: "cover" }} src={e.image_url} />
                                    <br />
                                    <br />
                                    <div>
                                        <strong>Price: {formatRupiah(e.price)}</strong><br />
                                        <strong>Rating: {e.rating}</strong><br />
                                        <strong>Size: {megaBytesToSize(e.size)}</strong><br />
                                        <strong style={{ marginRight: "10px" }}>Platform : Android & IOS
                                        </strong>
                                        <br />
                                    </div>
                                    <p>
                                        <strong style={{ marginRight: "10px" }}>Description :</strong>  {e.description}
                                    </p>

                                    <hr />
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
        </>
    )
}

export default Search