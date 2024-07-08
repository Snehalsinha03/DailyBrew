import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const NavBar = (props) => {
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark-mode' : 'navbar-light-mode'}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ${props.mode === 'dark' ? 'navbar-brand-dark-mode' : 'navbar-brand-light-mode'}`} to="/">DailyBrew</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${props.mode === 'dark' ? 'nav-link-dark-mode' : 'nav-link-light-mode'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className={`nav-link ${props.mode === 'dark' ? 'nav-link-dark-mode' : 'nav-link-light-mode'}`} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${props.mode === 'dark' ? 'nav-link-dark-mode' : 'nav-link-light-mode'}`} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${props.mode === 'dark' ? 'nav-link-dark-mode' : 'nav-link-light-mode'}`} to="/general">General</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${props.mode === 'dark' ? 'nav-link-dark-mode' : 'nav-link-light-mode'}`} to="/health">Health</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${props.mode === 'dark' ? 'nav-link-dark-mode' : 'nav-link-light-mode'}`} to="/science">Science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${props.mode === 'dark' ? 'nav-link-dark-mode' : 'nav-link-light-mode'}`} to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${props.mode === 'dark' ? 'nav-link-dark-mode' : 'nav-link-light-mode'}`} to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <DarkModeSwitch
                            checked={props.mode === 'dark'}
                            onChange={props.toggleMode}
                            size={30}
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
}

NavBar.propTypes = {
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
};

export default NavBar;