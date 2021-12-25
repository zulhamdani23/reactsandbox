import axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import { MobileAppContext } from "../Context/MobileAppContext";

function formatRupiah(angka) {
    if (angka !== null) {

        var number_string = angka.toString(),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi),
            separator;

        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if (ribuan) {
            separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
        return rupiah === '0' ? 'Free' : 'Rp. ' + rupiah + ",-";
    } else {
        return 'Free';

    }
}

function megaBytesToSize(megaBytes, decimals = 2) {
    if (megaBytes === 0) return '0 megaBytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(megaBytes) / Math.log(k));

    return parseFloat((megaBytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const SearchSection = () => {
    let {valueOfSearch} = useParams()
    const { data, setData, fetchStatus, setFetchStatus, currentId, setCurrentId, input, setInput, functions, searchStatus, setSearchStatus } = useContext(MobileAppContext)
    const { fetchData } = functions
    const [ searchData , setSearchData ] = useState([])

    useEffect(() => {

        const fetchSearch = async() => {
            let result = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
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

export default SearchSection