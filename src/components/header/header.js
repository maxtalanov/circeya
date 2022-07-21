import logo from '../../assets/logo.svg'
import './header.scss';

const Header = () => {

    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип CIRCEYA"/>
            <a className="header__phone" href="tel:+74954954954">+7 (495) 495-49-54</a>
        </header>
    )
}

export default Header;