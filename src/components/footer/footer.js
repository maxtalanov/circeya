import "./footer.scss"

const Footer = () => {

    return (
        <footer className="footer">
            <p className="footer__corping">&copy;Тест, 1022-{new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;