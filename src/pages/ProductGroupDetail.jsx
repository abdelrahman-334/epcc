import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { SealIcon, HourglassIcon, StarBadgeIcon, ToolIcon, HandshakeIcon } from '../components/icons';
import { fetchGroupBySlug } from '../api/productGroups.api';
import { ROUTES } from '../constants/routes';
import './ProductGroupDetail.css';
import Breadcrumb from '../components/Breadcrumb';

const featureIcons = [SealIcon, HourglassIcon, StarBadgeIcon, ToolIcon, HandshakeIcon];

function ProductGroupDetail() {
  const { groupSlug } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGroupBySlug(groupSlug);
        if (isMounted) setGroup(data);
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, [groupSlug]);

  if (loading) {
    return (
      <section className="group-detail-empty">
        <p>Loading...</p>
      </section>
    );
  }

  if (error || !group) {
    return (
      <section className="group-detail-empty">
        <h1>Product group not found</h1>
        <Link to={ROUTES.productGroups} className="button-pink">
          Back to Product Groups
        </Link>
      </section>
    );
  }

  return (
    <>
      <Reveal as="section" className="group-detail-header">
        <Breadcrumb
          items={[
            { label: 'Product Group', to: ROUTES.productGroups },
            { label: group.title },
          ]}
        />
        <h1 className="group-detail-header__heading">Built Strong. Designed Beautifully.</h1>
        <p className="group-detail-header__description">
          High performance materials for modern construction & interior spaces. Our range of
          advanced solutions is designed to deliver superior performance, durability and
          aesthetics.
        </p>
      </Reveal>

      {group.products && group.products.length > 0 ? (
        <section className="group-detail-products">
          {group.products.map((product, index) => (
            <Reveal key={product.slug} as="article" delay={index * 100} className="product-card-bento">
              <div className="product-card-bento__content">
                <div className="product-card-bento__number">{product.number}</div>
                <h3 className="product-card-bento__name">{product.name}</h3>
                <h4 className="product-card-bento__tagline">{product.tagline}</h4>
                <p className="product-card-bento__description">{product.description}</p>
              </div>
              <img
                className="product-card-bento__image"
                src={group.image_url || '/images/category-industrial-coatings.jpg'}
                alt={product.name}
              />
              <div className="product-card-bento__features">
                <h4 className="product-card-bento__features-title">Key Features</h4>
                <ul className="product-card-bento__features-list">
                  {(product.features ?? []).map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <Link to={ROUTES.productDetail(group.slug, product.slug)} className="button-outline">
                View Tech Specs
              </Link>
            </Reveal>
          ))}
        </section>
      ) : (
        <section className="group-detail-empty">
          <p>Detailed product catalog for this group is coming soon.</p>
        </section>
      )}

      {group.feature_strip && group.feature_strip.length > 0 && (
        <section className="group-detail-strip">
          {group.feature_strip.map((label, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <Reveal key={label} delay={index * 80} className="group-detail-strip__item">
                <span className="group-detail-strip__icon">
                  <Icon />
                </span>
                <p>{label}</p>
              </Reveal>
            );
          })}
        </section>
      )}

      <Footer />
    </>
  );
}

export default ProductGroupDetail;