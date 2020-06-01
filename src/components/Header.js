import React from 'react'
import '../styles/Header.css'
import Navbar from 'react-bootstrap/Navbar'


const Header = () => {

    return (
        <Navbar bg="dark" className="nav">
            <Navbar.Brand href="\">Quizz App</Navbar.Brand>
        </Navbar>
    )


}
export default Header