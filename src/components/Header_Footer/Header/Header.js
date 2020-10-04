import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


import { NavLink } from 'react-router-dom';
import { CityLogo } from '../../UI/Icons';
export default class Header extends Component {
    render() {
        return (
            <AppBar
                posistion="fixed"
                style={{
                    backgroundColor: '#98c5e9',
                    boxShadow: 'none ',
                    padding: '10px 0',
                    borderBottom: '2px solid #00285e'
                }} >
                <Toolbar
                    style={{
                        display: 'flex'
                    }}>
                    <div style={{ flexGrow: 1 }}>
                        <div className="header_logo">
                            <CityLogo
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>
                    </div>
                    <NavLink to="/the_team">
                        <Button color="inherit">
                            The Team
                        </Button>
                    </NavLink>
                    <NavLink to="/the_matches">
                        <Button color="inherit">
                            Matches
                        </Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        )
    }
}
