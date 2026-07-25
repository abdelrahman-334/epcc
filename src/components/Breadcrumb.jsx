import { Link } from 'react-router-dom';
import { ChevronRightIcon } from './icons';



function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label} className="breadcrumb__segment">
            {item.to && !isLast ? (
              <Link to={item.to} className="breadcrumb__item">
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast ? 'breadcrumb__item breadcrumb__item--active' : 'breadcrumb__item'
                }
              >
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRightIcon color="#45474A" />}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumb;