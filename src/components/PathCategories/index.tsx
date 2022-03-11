import { useCategories } from 'hooks/categories';
import { memo } from 'react';

const PathCategories = () => {
  const { categories } = useCategories();

  return (
    <ol className="ol-categories">
      {categories.map((category, index) => (
        <li className="li-category" key={index}>
          <span>{category}</span>
          <span className="chevron-right">&#x203A;</span>
        </li>
      ))}
    </ol>
  );
};

export default memo(PathCategories);
