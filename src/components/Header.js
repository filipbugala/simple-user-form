import '../App.css'
import logo from '../logo.svg';

const Header = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="logo" />
    <h2 className="header-text">Application header text</h2>
  </header>
)

export default Header;