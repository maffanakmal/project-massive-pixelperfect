import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../assets/css/settingBahasa.css'

const settingBahasa = () => {
    return (
        <>
            <div className="container">
                <header>
                    <div className="logo">
                        <img src="logo.png" alt="Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="profile">
                        <img src="hero.png" alt="Profile" />
                    </div>
                </header>
                <main>
                    <h1>Pengaturan Mata Uang</h1>
                    <div className="currency-settings">
                        <div className="selected-currency">
                            <h2>Mata Uang yang di pilih</h2>
                            <div className="currency">
                                <span>Indonesia Rupiah</span>
                                <span className="code">IDR</span>
                            </div>
                        </div>
                        <div className="currency-list">
                            <h2>Mata Uang</h2>
                            <div className="currency"><span>Amerika Serikat Dollar</span><span className="code">USD</span></div>
                            <div className="currency"><span>Arab Saudi Riyal</span><span className="code">SAR</span></div>
                            <div className="currency"><span>Australia Dollar</span><span className="code">AUD</span></div>
                            <div className="currency"><span>Belanda Euro</span><span className="code">EUR</span></div>
                            <div className="currency"><span>China Yuan</span><span className="code">RMB</span></div>
                            <div className="currency"><span>Filipina Peso</span><span className="code">PHP</span></div>
                            <div className="currency"><span>Jepang Yen</span><span className="code">JPY</span></div>
                            <div className="currency"><span>Korea Selatan Won</span><span className="code">KRW</span></div>
                            <div className="currency"><span>Malaysia Ringgit</span><span className="code">MYR</span></div>
                            <div className="currency"><span>Thailand Bath</span><span className="code">THB</span></div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default settingBahasa