import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {

    state = {
        isOpen: true
    };

    toggleNavbar=()=> {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    handleSignOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('access-token');
        this.props.history.push('/sign-in');
    };

    renderLink = () => {
        if (localStorage.getItem('access-token')) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item">
                        <a href="/sign-out" className="nav-link" onClick={this.handleSignOut}>Sign Out</a>
                    </li>
                </ul>
            );
        }
    };

    render() {
        return (
            <div className="App-Header text-center">
                    <Navbar color="faded" light expand="md">

                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!this.state.isOpen} navbar>
                            {this.renderLink()}
                        </Collapse>
                    </Navbar>

            </div>
        );
    }
}

export default withRouter(Header);
