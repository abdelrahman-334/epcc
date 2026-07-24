import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { ArrowRightIcon, PaintIcon, MoleculeIcon, GridIcon, FlaskIcon } from '../components/icons';
import { productGroups } from '../data/productGroups';
import { ROUTES } from '../constants/routes';
import './ProductGroups.css';

const icons = {
  'industrial-coatings': PaintIcon,
  'plastics-polymer-colorants': MoleculeIcon,
  'construction-adhesives': GridIcon,
};

function ProductGroups() {
  return (
    <>
      <section className="groups-header">
        <Reveal className="groups-header__inner">
          <p className="groups-header__eyebrow">Innovation in Chemical Solutions</p>
          <h1 className="groups-header__heading">Our Product Groups</h1>
          <p className="groups-header__description">
            Explore our comprehensive range of specialized chemical compounds, engineered for
            precision, durability, and performance across diverse industrial applications.
          </p>
        </Reveal>
      </section>

      <section className="groups-list">
        {productGroups.map((group, index) => {
          const Icon = icons[group.slug] || FlaskIcon;
          return (
            <Reveal key={group.slug} as="article" delay={(index % 3) * 100} className="group-article">
              <img className="group-article__image" src={group.image} alt={group.title} />
              <div className="group-article__body">
                <div className="group-article__header">
                  <span className="group-article__icon">
                    <Icon />
                  </span>
                  <h3 className="group-article__title">{group.title}</h3>
                </div>
                <p className="group-article__description">{group.description}</p>
                <div className="group-article__tags">
                  {group.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={ROUTES.productGroupDetail(group.slug)} className="button-pink">
                  Explore Group
                  <ArrowRightIcon color="#fff" />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </section>

      <Footer />
    </>
  );
}

export default ProductGroups;
