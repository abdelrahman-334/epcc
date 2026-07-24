import { footerVariants } from '../data/siteInfo';
import './Footer.css';

const defaults = footerVariants.default;

function Footer({
  title = defaults.title,
  tagline = defaults.tagline,
  links = defaults.links,
  copyright = defaults.copyright,
}) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <h2 className="site-footer__title">{title}</h2>
          <p className="site-footer__tagline">{tagline}</p>
        </div>
        <nav className="site-footer__links">
          {links.map((link) => (
            <a key={link} href="#" className="site-footer__link">
              {link}
            </a>
          ))}
        </nav>
      </div>
      {copyright && (
        <>
          <div className="site-footer__divider" />
          <p className="site-footer__copyright">{copyright}</p>
        </>
      )}
    </footer>
  );
}

export default Footer;
