import React, { useEffect, useContext } from 'react'
import {GameContext} from '../FinalContext/GameContext'
import {GameProvider} from '../FinalContext/GameContext'

const Game = () => {

    const { gameList,  fetchStatus, setFetchStatus,  functions } = useContext(GameContext)
    const { fetchGame } = functions


    useEffect(() => {

        if(fetchStatus){
            fetchGame()
            setFetchStatus(false)
        }

    },[fetchStatus, setFetchStatus])


    return (
        <>
      
            <div className="card-container">
                {gameList !== null && (
                    <>
                        {gameList.map((e) => {
                            return (
                                <div className="item">
                                    <img className="fakeimg" style={{ width: "100%", height: "65%", objectFit: "cover" , borderRadius: "5px"}} src={e.image_url} />
                                    
                                    <div style={{padding: "10px"}}>
                                        <h6>{e.name}</h6>
                                        <p>Tahun Rilis : {e.release} <br/>
                                        Genre: {e.genre} <br/>
                                        Platform: {e.platform}</p>
                                        {/* <strong>Durasi: {e.duration}</strong><br />
                                        <strong>Review: {e.review}</strong><br />    */}
                                        <br />
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
          
        </>
    )
}

export default Game