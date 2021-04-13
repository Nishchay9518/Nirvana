import React from 'react';
import './Login.css'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=22cbee74aa08443ead9848b61699cd35&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

function Login() {
    return (
        <div className="hero" style={{minHeight:'100vh'}}>
            <div className="logo">
                <img src="./Logo.png" alt = " NIRVANA "/>
            </div>
            <nav className="menu">
			<div className="menu__item">
				<a className="menu__item-link">experience</a>
				<div className="marquee">
					<div className="marquee__inner" aria-hidden="true">
						<span>experience</span>
						<span>experience</span>
						<span>experience</span>
						<span>experience</span>
					</div>
				</div>
			</div>
			<div className="menu__item">
				<a className="menu__item-link rght"> nirvana</a>
			
				<div className="marquee">
					<div className="marquee__inner" aria-hidden="true">
						<span> nirvana</span>
						<span> nirvana</span>
						<span> nirvana</span>
						<span> nirvana</span>
					</div>
				</div>
			</div>
            </nav>
            <a className="btn-login" href={AUTH_URL}>Login with spotify</a>
        </div>
    )
}

export default Login
