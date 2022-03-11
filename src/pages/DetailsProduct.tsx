import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { getDetailsList } from 'services/itemsApi';
import { DetailsAnnouncement } from 'services/types';

import { formatValue } from 'utils/formatValue';

const DetailsProduct = () => {
  const [announcement, setAnnouncement] = useState<DetailsAnnouncement>();

  const priceFormatted = useMemo(() => {
    if (announcement) {
      return formatValue(
        announcement.price.amount,
        announcement.price.currency,
        announcement.price.decimals
      );
    }
  }, [announcement]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDetailsList(id).then(({ item }) => {
        setAnnouncement(item);
      });
    }
  }, [id]);

  return (
    <>
      {announcement && (
        <main className="main-details">
          <section className="info-product">
            <img src={announcement.picture} alt={announcement.title} />

            <div>
              <span>
                {announcement.condition} • {announcement.sold_quantity} Vendidos
              </span>

              <h1>{announcement.title}</h1>

              <h2>{priceFormatted}</h2>

              <button>Comprar</button>
            </div>
          </section>

          <section className="description-product">
            <h2>Descripcíon del product</h2>
            <p>{announcement.description}</p>
          </section>
        </main>
      )}
    </>
  );
};

export default DetailsProduct;
