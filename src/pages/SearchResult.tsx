import { useEffect, useMemo, useState } from 'react';
import { getListItems } from 'services/itemsApi';

import PathCategories from 'components/PathCategories';
import { ResponseListAnnouncement } from 'services/types';
import ProductItemCard from 'components/ProductItemCard';
import { formatValue } from 'utils/formatValue';
import { useSearchParams } from 'react-router-dom';

type Announcements = Pick<ResponseListAnnouncement, 'categories' | 'items'>;

const SearchResult = () => {
  const [announcements, setAnnouncements] = useState<Announcements>();
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      getListItems(search).then(({ categories, items }) => {
        setAnnouncements({ categories, items });
      });
    }
  }, [search]);

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
                    id={item.id}
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
