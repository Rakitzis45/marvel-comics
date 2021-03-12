import React, { PureComponent } from 'react';
import  NavbarSearch from './NavbarSearch'

export default class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href='/search'>Marvel Comics Search</a>
                <NavbarSearch/>
            </nav>
        )
    }
}