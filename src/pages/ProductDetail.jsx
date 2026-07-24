import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import {
  ChevronRightIcon,
  TileGridIcon,
  GraniteColumnIcon,
  MosaicIcon,
  StaircaseIcon,
  CountertopIcon,
  ShieldClockIcon,
  DownloadIcon,
} from '../components/icons';
import { getGroupBySlug, getProductBySlug } from '../data/productGroups';
import { ROUTES } from '../constants/routes';
import './ProductDetail.css';

const applicationIcons = [TileGridIcon, GraniteColumnIcon, MosaicIcon, StaircaseIcon, CountertopIcon];

function ProductDetail() {
  const { groupSlug, productSlug } = useParams();
  const group = getGroupBySlug(groupSlug);
  const product = getProductBySlug(groupSlug, productSlug);
  const detail = product?.detail;

  if (!group || !product) {
    return (
      <section className="product-detail-empty">
        <h1>Product not found</h1>
        <Link to={ROUTES.productGroups} className="button-pink">
          Back to Product Groups
        </Link>
      </section>
    );
  }

  if (!detail) {
    return (
      <>
        <section className="product-detail-empty">
          <div className="breadcrumb">
            <span className="breadcrumb__item">Product Group</span>
            <ChevronRightIcon color="#45474A" />
            <span className="breadcrumb__item breadcrumb__item--active">{product.name}</span>
          </div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="product-detail-empty__note">Full technical specifications are coming soon.</p>
          <Link to={ROUTES.productGroupDetail(group.slug)} className="button-pink">
            Back to {group.title}
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="product-detail">
        <div className="breadcrumb">
          {detail.breadcrumb.map((crumb, index) => (
            <span key={crumb} className="breadcrumb__crumb">
              {index > 0 && <ChevronRightIcon color="#45474A" />}
              <span
                className={
                  index === detail.breadcrumb.length - 1
                    ? 'breadcrumb__item breadcrumb__item--active'
                    : 'breadcrumb__item'
                }
              >
                {crumb}
              </span>
            </span>
          ))}
        </div>

        <div className="product-detail__grid">
          <Reveal as="div" className="product-card">
            <div className="product-card__header">
              <span className="product-card__number">{product.number}</span>
              <h1 className="product-card__heading">{detail.heading}</h1>
            </div>
            <p className="product-card__summary">{detail.summary}</p>
            <div className="product-card__image-wrap">
              <img className="product-card__image" src={detail.image} alt={detail.heading} />
            </div>
            <div className="product-card__features">
              <h4 className="product-card__features-title">Key Features</h4>
              <ul className="product-card__features-list">
                {detail.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="product-detail__side">
            <Reveal as="div" delay={100} className="side-card">
              <h4 className="side-card__title">Typical Applications</h4>
              <div className="applications-grid">
                {detail.typicalApplications.map((application, index) => {
                  const Icon = applicationIcons[index % applicationIcons.length];
                  return (
                    <div key={application} className="applications-grid__item">
                      <span className="applications-grid__icon">
                        <Icon />
                      </span>
                      <p>{application}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal as="div" delay={200} className="side-card">
              <h4 className="side-card__title">Technical Highlights</h4>
              <div className="tech-table">
                {detail.technicalHighlights.map((row, index) => (
                  <div
                    key={row.label}
                    className={index % 2 === 1 ? 'tech-table__row tech-table__row--shaded' : 'tech-table__row'}
                  >
                    <span className="tech-table__label">{row.label}</span>
                    <span className="tech-table__value">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="side-card__actions">
                <button type="button" className="button-outline-dark">
                  <ShieldClockIcon width={14} height={18} />
                  View SDS
                </button>
                <button type="button" className="button-dark">
                  <DownloadIcon width={14} height={14} />
                  Download TDS
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="application-images">
          {detail.applicationImages.map((image, index) => (
            <Reveal key={image} delay={index * 100} className="application-images__item">
              <img src={image} alt="" />
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetail;
