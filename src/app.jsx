import React from 'react';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import { Leaderboard } from './leaderboard/leaderboard';
import { Profile } from './profile/profile';


export default function App() {
    return(
        <BrowserRouter>
            <div className='body'>
                <header className = "bg-dark text-light container-fluid">
                    <nav className = "navbar navbar-expand-lg navbar-dark">
                        <div className ="parent container-fluid bg-dark">
                            <div className="child">
                                <h1 className="company-name"> TRICKTRACKER</h1>
                            </div>
                            <div className = "child">
                                <menu className="navbar-nav ">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to =''>Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className='nav-link' to='home'>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className='nav-link' to='leaderboard'>Leaderboard</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className='nav-link' to='profile'>Profile</NavLink>
                                    </li>
                                </menu>
                            </div>  
                        </div>  
                    </nav>
                </header>
                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/home' element={<Home />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <footer className="bg-dark text-white-50">
                    <div>
                    <span className="text-reset">Author Name(s)</span>
                    <a href="https://github.com/jtappen1/Startup">GitHub</a>
                    </div>
                </footer>
            </div>
    </BrowserRouter>
        
    );
    function NotFound() {
        return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
    }
    
}