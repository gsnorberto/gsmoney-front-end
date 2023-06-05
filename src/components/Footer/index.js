import { Container } from "./styles"
import { IoLogoInstagram, IoLogoWhatsapp, IoMailOutline, IoLogoTwitter } from "react-icons/io5";

export default () => {
    return (
        <Container>
            <div className="icons">
                <IoLogoInstagram className="icon" />
                <IoLogoWhatsapp className="icon" />
                <IoMailOutline className="icon" />
                <IoLogoTwitter className="icon" />
            </div>

            <div className="description">
                <div className="copyright">© 2022 - GSmoney</div>
                <div>Desenvolvido por: Gabriel Norberto</div>
            </div>
        </Container>
    )
}