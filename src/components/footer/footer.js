import "./footer.scss"

const Footer = () => {

    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; TEST, 1022&#8211;{new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;