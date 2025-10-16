import React from 'react'

const Footer = () => {
    return (
        <footer className="foot-main">
            <p className="foot-p">
                Email:
                <a href="mailto:indexprolific@gmail.com">indexprolific@gmail.com</a>
            </p>
            <p className="foot-p">
                Phone:
                <a href="tel:+2348133274250">+234 813 327 4250</a>
            </p>
            <p className="foot-p">
                Follow us:
                <a href="https://web.facebook.com/IndexMcProlific/" className="foot-a" >Facebook</a>
                |
                <a href="https://x.com/prolificmcp" className="foot-a">Twitter</a>
                |
                <a href="https://www.linkedin.com/in/mc-prolific-906a0b256/" className="foot-a">LinkedIn</a>
                |
                <a href="https://wa.me/2348133274250" target="_blank" className="foot-a">
                    Chat with us
                </a>
                |
                <a href="https://www.nairaland.com/mcprolific" className="foot-a">Nairaland</a>
            </p>
            <p className="foot-p">
                &copy; 2025
                <a href="https://www.ncc.gov.ng/" className="foot-a">NCC</a>. All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer