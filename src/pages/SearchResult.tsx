import { useEffect, useState } from 'react';
import { getListItems } from 'services/itemsApi';

import PathCategories from 'components/PathCategories';
import { ResponseListAnnouncement } from 'services/types';
import ProductItemCard from 'components/ProductItemCard';

type Announcements = Pick<ResponseListAnnouncement, 'categories' | 'items'>;

const SearchResult = () => {
  const [announcements, setAnnouncements] = useState<Announcements>();

  useEffect(() => {
    getListItems('topline').then(({ categories, items }) => {
      setAnnouncements({ categories, items });
    });
  }, []);

  return (
    <div>
      {announcements && (
        <>
          <PathCategories categories={announcements.categories} />
          <br />
          <ol className="list-announcements">
            {announcements.items.map((item, index) => (
              <li key={index}>
                <ProductItemCard item={item} />
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
};

export default SearchResult;
