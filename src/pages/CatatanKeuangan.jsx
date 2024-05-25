import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap'
import CatatanPemasukan from '../components/CatatanPemasukan'
import { catatanLinks } from '../assets/dataCatatanKeuangan'

const CatatanKeuangan = () => {
    const [changeColor, setChangeColor] = useState(false)
    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackgroundColor)
        return () => {
            window.removeEventListener('scroll', changeBackgroundColor)
        }
    }, [])

    return (
        <>
            <div className='catatanKeuangan-container min-vh-100 d-flex flex-column justify-content-center align-items-center' id='pemasukan'>
                <h2 className='mb-3'>Catatan Keuangan</h2>
                <Row>
                    <Nav className="catatanKeuangan-nav mb-3 d-flex justify-content-center align-items-center w-100">
                        {catatanLinks.map((link) => (
                            <div className='catatan-link' key={link.id}>
                                <Link
                                    to={link.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjusted offset for better scroll positioning
                                    duration={500} // Adjusted duration for smoother scrolling
                                    activeClass="active" // Class to apply when the link is active
                                >
                                    {link.text}
                                </Link>
                            </div>
                        ))}
                    </Nav>
                </Row>
                <div className='nominal-info d-flex justify-content-center align-items-center mx-auto rounded-3 mb-3'>
                    <h3 className='fw-bold text-white'>Rp. 500.000</h3>
                </div>
                <Row className="rounded-4 p-3 info-catatanKeuangan border m-4 d-flex ">
                    <CatatanPemasukan />
                </Row>
            </div>
        </>
    )
}

export default CatatanKeuangan