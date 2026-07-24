import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/siteInfo';
import { ROUTES } from '../constants/routes';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__logo">EPCC</div>
        <nav className="site-header__nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === ROUTES.home}
              className={({ isActive }) =>
                isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
