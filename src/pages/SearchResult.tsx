import { useEffect, useMemo, useState } from 'react';
import { getListItems } from 'services/itemsApi';

import PathCategories from 'components/PathCategories';
import { ResponseListAnnouncement } from 'services/types';
import ProductItemCard from 'components/ProductItemCard';
import { formatValue } from 'utils/formatValue';
import { useSearchParams } from 'react-router-dom';
import { useCategories } from 'hooks/categories';

type Announcements = Pick<ResponseListAnnouncement, 'items'>;

const SearchResult = () => {
  const [announcements, setAnnouncements] = useState<Announcements>();
  const [status, setStatus] = useState<'loading' | 'success'>();
  const [searchParams] = useSearchParams();

  const { addCategories } = useCategories();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      setStatus('loading');
      getListItems(search).then(({ categories, items }) => {
        setAnnouncements({ items });
        addCategories(categories);

        setStatus('success');
      });
    }
  }, [addCategories, search]);

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
          priceFormatted
        };
      });
    }
  }, [announcements]);

  if (status === 'loading') {
    return <div className="loading">...Cargando</div>;
  }

  return (
    <div className="container">
      {announcements && announcementsFormatted && (
        <>
          <PathCategories />
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
