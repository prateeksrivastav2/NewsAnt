import React  from 'react'
// import PropTypes from 'prop-types'
import { BrowserRouter as  Routes, Link,useLocation, Route } from 'react-router-dom'

const NavBar =()=>{
    let location =useLocation();
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" style={{marginRight:'35px'}}>NewsAnt</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item" style={{marginRight:'35px'}}>
                                    <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item"style={{marginRight:'35px'}}>
                                    <Link className={`nav-link ${location.pathname==="/Business"?"active":""}`} to="/Business">Business</Link>
                                </li>
                                <li className="nav-item"style={{marginRight:'35px'}}>
                                    <Link className={`nav-link ${location.pathname==="/Health"?"active":""}`} to="/Health">Health</Link>
                                </li>
                                <li className="nav-item"style={{marginRight:'35px'}}>
                                    <Link className={`nav-link ${location.pathname==="/Science"?"active":""}`} to="/Science">Science</Link>
                                </li>
                                <li className="nav-item"style={{marginRight:'35px'}}>
                                    <Link className={`nav-link ${location.pathname==="/Sports"?"active":""}`} to="/Sports">Sports</Link>
                                </li>
                                
                                <li className="nav-item"style={{marginRight:'35px'}}>
                                    <Link className={`nav-link ${location.pathname==="/Technology"?"active":""}`} to="/Technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    
}

export default NavBar
