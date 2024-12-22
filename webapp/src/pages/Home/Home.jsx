import React from 'react'
import { Link } from 'react-router-dom'
const tg = window.Telegram.WebApp
const Home = () => {
    const close = () => {
        tg.close()
    }
    
    return (
        <>
        <div className="myBoy">Tima is my favorite GAY</div>
        <button onClick={close}>Close</button>
        <Link to={"/about"}>About</Link>
      </>
    )
}

export default Home