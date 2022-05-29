import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import logo from '../../assets/logo.png'

class Navbar extends Component {
    state = { clicked: false }
    handleClick= () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
    return(
        <nav className='NavbarItems'>
            <a className='navbar-logo'><img src={logo}></img></a>
            
            <div className='menu-icon' onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index)=>{
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
    }
}

export default Navbar