import React from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import logo from './logo.svg'
import { links, social } from './data'

const Sidebar = () => {
    return (
        <div>
            <nav>
                <div className="nav center">
                    <div className="nav-header">
                        <img src={logo} alt="logo" />
                        <button className="nav-toggle"><FaBars /></button>
                    </div>
                    <div className="df space-between links-container show-container">
                        <ul className="links">
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className="social-icons">
                            <li>
                                <a href="https://www.twitter.com"><FaTwitter></FaTwitter></a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com"><FaTwitter></FaTwitter></a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com"><FaTwitter></FaTwitter></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Sidebar