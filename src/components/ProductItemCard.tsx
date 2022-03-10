import { Announcement } from 'services/types';
import freeShipping from 'assets/ic_shipping.png';

type ProductItemCardProps = {
  item: Announcement;
};

const ProductItemCard = ({ item }: ProductItemCardProps) => {
  return (
    <article className="wrapper-item">
      <div className="item-image">
        <img src={item.picture} alt={item.title} />
      </div>
      <div className="info-content">
        <div className="price-location">
          <div className="price-wrapper">
            <h2>{item.price.amount}</h2>
            <div>
              <img src={freeShipping} alt="Entrega gratuita" />
            </div>
          </div>
          <span>São Capital Federal asdasd</span>
        </div>
        <p className="title-product">{item.title}</p>
      </div>
    </article>
  );
};

export default ProductItemCard;
