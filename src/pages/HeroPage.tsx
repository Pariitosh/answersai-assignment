import { Link } from 'react-router-dom'
import '../styles/hero.css'
export default function HeroPage() {
    return (
        <>
            <header>
                <img alt='' src='logo.svg' />
                <Link to={'/signup'}><button className='login-btn'>Log in</button></Link>
            </header>
            <main>
                <div className='hero-section'>
                    <div className='hero-left'>
                        <h1>Learn by <span>doing</span></h1>
                        <p>Guided interactive problem solving that's effective and fun. Master concepts in 15 minutes a day.</p>
                        <Link to="/signup"  ><button className='hero-btn'>Get Started</button></Link>
                    </div>
                    <div className='hero-right'>
                        <video preload="auto" autoPlay muted    >
                            <source src="hero-vid.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className='hero-options'>
                    <div className='hero-option'>
                        <img alt='' src='math.svg' />
                        <p>Math</p>
                    </div>
                    <div className='hero-option'>
                        <img alt='' src='DA.svg' />
                        <p>Data Analysis</p>
                    </div>
                    <div className='hero-option'>
                        <img alt='' src='CS.svg' />
                        <p>Computer Science</p>
                    </div>
                    <div className='hero-option'>
                        <img alt='' src='AI.svg' />
                        <p>Programming & AI </p>
                    </div>
                    <div className='hero-option'>
                        <img alt='' src='science.svg' />
                        <p>Science & Engineering</p>
                    </div>
                </div>

            </main>
        </>
    )
}