import { Link } from 'react-router-dom';

import freeShipping from 'assets/ic_shipping.png';

type ProductItemCardProps = {
  image: string;
  price: string;
  location: string;
  title: string;
  freeDelivery: boolean;
};

const ProductItemCard = ({
  image,
  title,
  location,
  price,
  freeDelivery
}: ProductItemCardProps) => {
  return (
    <article className="wrapper-item">
      <Link to="/">
        <div className="item-image">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="info-content">
        <div className="price-location">
          <div>
            <Link to="/">
              <h2>{price}</h2>
            </Link>
            {freeDelivery && (
              <div>
                <img src={freeShipping} alt="Entrega gratuita" />
              </div>
            )}
          </div>
          <span>{location}</span>
        </div>
        <Link to="/">
          <p className="title-product">{title}</p>
        </Link>
      </div>
    </article>
  );
};

export default ProductItemCard;
