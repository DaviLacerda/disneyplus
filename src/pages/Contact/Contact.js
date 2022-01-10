import Header from "../../components/Header/Header"

import { ContactContainer } from "./styles"
import Footer from "../../components/Footer/Footer"

// import images
import instagram from '../../assets/social/instagram.png'
import whatsapp from '../../assets/social/whatsapp.png'
import gmail from '../../assets/social/gmail.png'
import linkedin from '../../assets/social/linkedin.png'

function Contact() {
    return (
        <>
            <Header></Header>
            <ContactContainer>
                <div className="contact__me">
                    <h1>Davi Lacerda</h1>
                    <h2>Front-End Developer</h2>
                    <h3>Uberlândia - Minas Gerais, Brazil</h3>
                </div>
                <div className="contact__social">
                    {/* Instagram Icon */}
                    <abbr title="Instagram"><a href="https://www.instagram.com/davi.frontend/" target="_blank"><img src={instagram} alt="Instagram Logo" width="32px" height="32px"/></a></abbr>

                    {/* WhattsApp Icon */}
                    <abbr title="WhattsApp"><a href="https://api.whatsapp.com/send?phone=5534992750234&text=Ol%C3%A1%20Davi%2C%20tudo%20bem%3F" target="_blank"><img src={whatsapp} alt="WhattsApp Logo" width="32px" height="32px"/></a></abbr>

                    {/* Gmail Icon */}
                    <abbr title="Gmail"><a href="mailto:davi16lacerda@gmail.com?subject=Digite%20o%20assunto%20aqui" target="_blank"><img src={gmail} alt="Gmail Logo" width="32px" height="32px"/></a></abbr>

                    {/* LinkedIn Icon */}
                    <abbr title="LinkedIn"><a href="https://www.linkedin.com/in/davi16lacerda/" target="_blank"><img src={linkedin} alt="LinkedIn Icon" width="32px" height="32px"/></a></abbr>
                    </div>
            </ContactContainer>
            <Footer></Footer>
        </>
    )
}

export default Contact