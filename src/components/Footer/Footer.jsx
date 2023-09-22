//rfc
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
              <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="bd_right">
                                <h4>GET HELP</h4>
                                <ul>
                                    <li><NavLink to="/home">Home</NavLink></li>
                                    <li><NavLink to="/search?q=nike">Nike</NavLink></li>
                                    <li><NavLink to="/search?q=adidas">Adidas</NavLink></li>
                                    <li><NavLink to="/home">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bd_right">
                                <h4>SUPPORT</h4>
                                <ul>
                                    <li><NavLink to="/">About</NavLink></li>
                                    <li><NavLink to="/">Contact</NavLink></li>
                                    <li><NavLink to="/">Help</NavLink></li>
                                    <li><NavLink to="/">Phone</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="b">
                                <h4>REGISTER</h4>
                                <ul>
                                    <li><NavLink to="/register">Register</NavLink></li>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_design">
                <p>© 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.
                </p>
            </div>
        </footer>
    </div>
  )
}
