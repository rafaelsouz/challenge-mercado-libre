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
      <div className="item-image">
        <img src={image} alt={title} />
      </div>
      <div className="info-content">
        <div className="price-location">
          <div>
            <h2>{price}</h2>
            {freeDelivery && (
              <div>
                <img src={freeShipping} alt="Entrega gratuita" />
              </div>
            )}
          </div>
          <span>{location}</span>
        </div>
        <p className="title-product">{title}</p>
      </div>
    </article>
  );
};

export default ProductItemCard;
