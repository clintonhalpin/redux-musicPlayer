import npmPackage from './../../package.json';
import React, { Component } from 'react';
import Logo from './Logo';

export default class Header extends Component {
    render() {
        return (
            <div className="header pa1 bg--purple">
                <div className="header__link" style={{opacity: .5}}><a className="color--white" href={npmPackage.repository.url}>dux on Github</a></div>
                <div className="header__link ta--center"><Logo /></div>
                <div className="header__link ta--right"><a className="color--white" href="#">Log Out</a></div>
            </div>
        )   
    }
}
