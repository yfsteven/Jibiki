import React from 'react'
import './Header.css'

function Header() {
    return (
        <header className='jibiki--header'>
            <div className='title--logo'>
                <img className='logo--img' src='./logo.png' alt='logo' />
                <h4>Jibiki</h4>
            </div>
            <form className='search-form'>
    <           input type='text' name='search' placeholder='Enter keywords here...' />
                <button>Submit</button>
            </form>
        </header>
    );
}
export default Header