import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { ArrowRightIcon, ChevronRightIcon } from '../components/icons';
import { coreIndustries, featuredGroups, metrics, valueProps } from '../data/homeContent';
import { ROUTES } from '../constants/routes';
import './Home.css';

function Home() {
  return (
    <>
      <section className="home-hero">
        <img className="home-hero__image" src="/images/hero-home.jpg" alt="" />
        <div className="home-hero__gradient" />
        <div className="home-hero__content">
          <div className="home-hero__eyebrow">
            <span>Product Group</span>
            <ChevronRightIcon color="#DF5090" />
            <span>Construction & Interior</span>
          </div>
          <h1 className="home-hero__heading">
            SEAMLESS SURFACES.
            <br />
            <span className="home-hero__heading-muted">STRONG BONDS.</span>
          </h1>
          <p className="home-hero__description">
            SOLUTIONS THAT ENHANCE EVERY SPACE. From versatile solid surface sheets to high
            strength adhesives, our materials bring beauty, durability and reliability to every
            project.
          </p>
          <Link to={ROUTES.productGroups} className="home-hero__cta">
            Explore Product Groups
          </Link>
        </div>
      </section>

      <section className="value-props">
        <div className="value-props__inner">
          {valueProps.map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="value-props__item">
              <item.Icon className="value-props__icon" />
              <h3 className="value-props__title">{item.title}</h3>
              <p className="value-props__description">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-block">
        <Reveal className="section-block__header">
          <h2 className="section-block__heading">Core Industries</h2>
          <p className="section-block__subheading">
            Advanced chemical solutions tailored for diverse manufacturing and construction
            applications.
          </p>
        </Reveal>
        <div className="industries-grid">
          {coreIndustries.map((industry, index) => (
            <Reveal
              key={industry.title}
              as="article"
              delay={(index % 3) * 100}
              className={
                industry.accent ? 'industry-card industry-card--accent' : 'industry-card'
              }
            >
              <div className="industry-card__image">
                <industry.Icon />
              </div>
              <div className="industry-card__body">
                <h3 className="industry-card__title">{industry.title}</h3>
                <p className="industry-card__description">{industry.description}</p>
                <Link to={ROUTES.productGroups} className="text-link">
                  View Solutions
                  <ArrowRightIcon width="10" height="10" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-block section-block--bordered">
        <Reveal className="section-block__header">
          <h2 className="section-block__heading">Our Product Groups</h2>
          <p className="section-block__subheading">
            Engineered for excellence, our specialized product lines deliver industry-leading
            performance and reliability.
          </p>
        </Reveal>
        <div className="product-groups-grid">
          {featuredGroups.map((group, index) => (
            <Reveal key={group.title} as="article" delay={(index % 4) * 100} className="product-group-card">
              <img className="product-group-card__image" src={group.image} alt={group.title} />
              <div className="product-group-card__body">
                <h3 className="product-group-card__title">{group.title}</h3>
                <p className="product-group-card__description">{group.description}</p>
                <Link to={ROUTES.productGroups} className="text-link">
                  View Catalog
                  <ArrowRightIcon width="10" height="10" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="metrics-block">
          <Reveal className="section-block__header">
            <h2 className="section-block__heading">Quality & Performance Metrics</h2>
            <p className="section-block__subheading">
              Data-driven excellence across all our product lines and manufacturing processes.
            </p>
          </Reveal>
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <Reveal key={metric.title} delay={index * 100} className="metric-card">
                {metric.value ? (
                  <div className="metric-card__value">{metric.value}</div>
                ) : (
                  <svg
                    className="metric-card__icon"
                    width="44"
                    height="42"
                    viewBox="0 0 44 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2 42L11.4 35.6L4.2 34L4.9 26.6L0 21L4.9 15.4L4.2 8L11.4 6.4L15.2 0L22 2.9L28.8 0L32.6 6.4L39.8 8L39.1 15.4L44 21L39.1 26.6L39.8 34L32.6 35.6L28.8 42L22 39.1L15.2 42ZM19.9 28.1L31.2 16.8L28.4 13.9L19.9 22.4L15.6 18.2L12.8 21L19.9 28.1Z"
                      fill="#8C004F"
                    />
                  </svg>
                )}
                <h3 className="metric-card__title">{metric.title}</h3>
                <p className="metric-card__description">{metric.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
