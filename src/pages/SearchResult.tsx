import { useEffect, useState } from 'react';
import { getListItems } from 'services/itemsApi';

import PathCategories from 'components/PathCategories';
import { ResponseListAnnouncement } from 'services/types';

type Announcements = Pick<ResponseListAnnouncement, 'categories' | 'items'>;

const SearchResult = () => {
  const [announcements, setAnnouncements] = useState<Announcements>();

  useEffect(() => {
    getListItems('iphone').then(({ categories, items }) => {
      setAnnouncements({ categories, items });
    });
  }, []);

  return (
    <div>
      {announcements && (
        <PathCategories categories={announcements.categories} />
      )}
    </div>
  );
};

export default SearchResult;