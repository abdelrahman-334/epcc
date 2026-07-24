import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { TargetGlobeIcon, EyeIcon, PhoneIcon, MailIcon, LocationIcon } from '../components/icons';
import { coreValues } from '../data/aboutContent';
import { company } from '../data/siteInfo';
import './About.css';

function About() {
  return (
    <>
      <section className="about-story">
        <Reveal as="div" className="about-story__text">
          <h1 className="about-story__heading">
            OUR STORY
            <br />
            <span className="about-story__heading-accent">& VALUES</span>
          </h1>
          <p className="about-story__intro">
            For over two decades, EPCC has been engineering high-performance chemical solutions
            that power industries and build a stronger Egyptian manufacturing future.
          </p>
          <div className="about-story__body">
            <h2 className="about-story__subheading">Our Story</h2>
            <p>
              Founded in 2004 by industry pioneer Hamoud Aboulseoud, Egyptian for Putties and
              Color Concentrates (EPCC) has grown into a cornerstone of Egypt's chemical sector.
              With a legacy built on trust and unrivaled expertise, our founder's name remains
              synonymous with quality throughout the region. For over two decades, we have
              engineered and supplied high-performance solutions for the color, coating, ink, and
              Polyurethane (PU) markets.
            </p>
            <p>
              Today, EPCC stands as a comprehensive chemical partner, offering an advanced
              portfolio that includes masterbatches, specialized coatings, technical sprays,
              industrial inks, Polyurethanes, thermoplastics, release agents, and tailored
              chemical formulations.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <img className="about-story__image" src="/images/about-story.jpg" alt="EPCC facility" />
        </Reveal>
      </section>

      <section className="mission-vision">
        <Reveal className="mission-vision__card">
          <span className="mission-vision__badge mission-vision__badge--teal">
            <TargetGlobeIcon />
          </span>
          <h3 className="mission-vision__title mission-vision__title--teal">Our Mission</h3>
          <p>
            To manufacture premium, Egyptian-made chemical materials that meet stringent
            international standards, providing our local and global partners with a
            high-performance, financially competitive alternative to worldwide brands.
          </p>
        </Reveal>
        <Reveal delay={100} className="mission-vision__card mission-vision__card--accent">
          <span className="mission-vision__badge mission-vision__badge--pink">
            <EyeIcon />
          </span>
          <h3 className="mission-vision__title mission-vision__title--pink">Our Vision</h3>
          <p>
            To elevate Egyptian industrial manufacturing on the global stage, becoming the
            premier regional benchmark for chemical innovation, polymer science, and sustainable
            production.
          </p>
        </Reveal>
      </section>

      <div className="core-values-divider">
        <span className="core-values-divider__line" />
        <span className="core-values-divider__label">Core Values</span>
        <span className="core-values-divider__line" />
      </div>

      <section className="core-values">
        {coreValues.map((value, index) => (
          <Reveal key={value.title} delay={index * 100} className="core-value">
            <span className={`core-value__badge core-value__badge--${value.color}`}>
              <value.Icon />
            </span>
            <h4 className={`core-value__title core-value__title--${value.color}`}>{value.title}</h4>
            <p>{value.description}</p>
          </Reveal>
        ))}
      </section>

      <Reveal as="section" className="about-contact">
        <div className="about-contact__info">
          <h2 className="about-contact__brand">{company.name}</h2>
          <p className="about-contact__tagline">Egyptian for putties and color conc.</p>
          <div className="about-contact__item">
            <PhoneIcon className="about-contact__icon" />
            <div>
              <span className="about-contact__label">Phone no.</span>
              {company.phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
          </div>
          <div className="about-contact__item">
            <MailIcon className="about-contact__icon" />
            <div>
              <span className="about-contact__label">Email:</span>
              {company.emails.map((email) => (
                <p key={email}>{email}</p>
              ))}
            </div>
          </div>
          <div className="about-contact__item">
            <LocationIcon className="about-contact__icon" />
            <div>
              <span className="about-contact__label">Location</span>
              <p>{company.address}</p>
            </div>
          </div>
        </div>
        <form className="about-contact__form" onSubmit={(event) => event.preventDefault()}>
          <h3 className="about-contact__form-heading">Send a Technical Inquiry</h3>
          <div className="about-contact__form-row">
            <input className="form-input" type="text" placeholder="Name" aria-label="Name" />
            <input className="form-input" type="email" placeholder="Email" aria-label="Email" />
          </div>
          <input
            className="form-input"
            type="text"
            placeholder="Company / Organization"
            aria-label="Company / Organization"
          />
          <textarea
            className="form-textarea"
            placeholder="Message / Required Formulation"
            aria-label="Message / Required Formulation"
            rows={4}
          />
          <button type="submit" className="button-pink">
            Submit Inquiry
          </button>
        </form>
      </Reveal>

      <Footer />
    </>
  );
}

export default About;
