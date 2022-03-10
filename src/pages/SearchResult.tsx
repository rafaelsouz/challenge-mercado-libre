import { useEffect, useMemo, useState } from 'react';
import { getListItems } from 'services/itemsApi';

import PathCategories from 'components/PathCategories';
import { ResponseListAnnouncement } from 'services/types';
import ProductItemCard from 'components/ProductItemCard';
import { formatValue } from 'utils/formatValue';

type Announcements = Pick<ResponseListAnnouncement, 'categories' | 'items'>;

const SearchResult = () => {
  const [announcements, setAnnouncements] = useState<Announcements>();

  useEffect(() => {
    getListItems('iphone').then(({ categories, items }) => {
      setAnnouncements({ categories, items });
    });
  }, []);

  const announcementsFormatted = useMemo(() => {
    if (announcements) {
      return announcements.items.map((item) => {
        const priceFormatted = formatValue(
          item.price.amount,
          item.price.currency,
          item.price.decimals
        );

        return {
          ...item,
          priceFormatted,
          location: 'Capital Federal'
        };
      });
    }
  }, [announcements]);

  return (
    <div className="container">
      {announcements && announcementsFormatted && (
        <>
          <PathCategories categories={announcements.categories} />
          <ol className="list-announcements">
            {announcementsFormatted.map((item, index) => (
              <>
                <li key={index}>
                  <ProductItemCard
                    image={item.picture}
                    price={item.priceFormatted}
                    title={item.title}
                    location={item.location}
                    freeDelivery={item.free_shipping}
                  />
                </li>
                <hr />
              </>
            ))}
          </ol>
        </>
      )}
    </div>
  );
};

export default SearchResult;
