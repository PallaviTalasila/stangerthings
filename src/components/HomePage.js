import React from 'react'
import Header from './Header'

const HomePage = ({username, setUsername , setPassword, setUserToken}) => {

    return (
        <div>
            <Header username={username} setUsername={setUsername} setPassword={setPassword} setUserToken={setUserToken}/>
            <div className='content'>
                <h1 className='welcomeMessage'>Welcome {username}</h1>
            </div>
        </div>
    )
}

export default HomePage;