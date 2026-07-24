import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { PinFilledIcon, PhoneCircleIcon, MailOutlineIcon } from '../components/icons';
import { globalStats } from '../data/contactContent';
import { company, footerVariants } from '../data/siteInfo';
import './Contact.css';

function Contact() {
  return (
    <>
      <Reveal as="section" className="contact-hero">
        <h1 className="contact-hero__heading">GET IN TOUCH</h1>
        <p className="contact-hero__description">
          Innovation at Your Service. Connect with our technical experts to discuss formulations,
          material specifications, or custom industrial solutions.
        </p>
      </Reveal>

      <section className="contact-main">
        <Reveal as="div" className="contact-info">
          <h2 className="contact-info__heading">Contact Information</h2>
          <p className="contact-info__description">
            Reach out to our dedicated support teams for technical inquiries, sales, and global
            distribution networking.
          </p>
          <div className="contact-info__card">
            <PinFilledIcon className="contact-info__icon" />
            <div>
              <span className="contact-info__label">Headquarters & Manufacturing</span>
              <p>{company.address}</p>
            </div>
          </div>
          <div className="contact-info__card">
            <PhoneCircleIcon className="contact-info__icon" />
            <div>
              <span className="contact-info__label">Direct Lines</span>
              {company.phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
          </div>
          <div className="contact-info__card">
            <MailOutlineIcon className="contact-info__icon" />
            <div>
              <span className="contact-info__label">Technical Support Email</span>
              <a className="contact-info__link" href={`mailto:${company.emails[0]}`}>
                {company.emails[0]}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal as="form" delay={150} className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <h2 className="contact-form__heading">Technical Inquiry Form</h2>
          <div className="contact-form__row">
            <div className="form-field">
              <label className="form-label" htmlFor="contact-name">
                Full Name
              </label>
              <input className="form-input" id="contact-name" type="text" placeholder="e.g. John Doe" />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="contact-company">
                Company / Organization
              </label>
              <input
                className="form-input"
                id="contact-company"
                type="text"
                placeholder="e.g. Industrial Corp"
              />
            </div>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="contact-email">
              Professional Email
            </label>
            <input className="form-input" id="contact-email" type="email" placeholder="john@example.com" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="contact-message">
              Message / Required Formulation
            </label>
            <textarea
              className="form-textarea"
              id="contact-message"
              rows={4}
              placeholder="Please detail your technical requirements, desired properties, or application environment..."
            />
          </div>
          <button type="submit" className="button-pink">
            Submit Inquiry
          </button>
        </Reveal>
      </section>

      <section className="global-presence">
        <Reveal>
          <h2 className="global-presence__heading">Serving Global Markets</h2>
          <p className="global-presence__description">
            Delivering high-performance chemical solutions with precision and reliability across
            diverse industries worldwide.
          </p>
        </Reveal>
        <div className="global-presence__stats">
          {globalStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100} className="global-presence__stat">
              <stat.Icon className="global-presence__icon" />
              <span className="global-presence__value">{stat.value}</span>
              <span className="global-presence__label">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="contact-map">
        <div className="contact-map__frame">
          <img className="contact-map__image" src="/images/contact-map.jpg" alt="Map to EPCC facility" />
          <div className="contact-map__card">
            <h4>6 October Industrial Zone</h4>
            <p>Get Directions to Facility</p>
          </div>
        </div>
      </Reveal>

      <Footer {...footerVariants.industrial} />
    </>
  );
}

export default Contact;
