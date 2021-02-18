import React from 'react'

const Header = ({username, setUsername , setPassword, setUserToken}) => {

    const handleClick = (event) => {
        localStorage.removeItem(`${username}Token`);
        setUserToken(false);
        setUsername('');
        setPassword('');
    }

    return (
        <div className='header'>
            <button className='logout' onClick={handleClick} >Logout</button>
        </div>
    )

}

export default Header