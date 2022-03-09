import { memo } from 'react';

type PathCategoriesProps = {
  categories: string[];
};

const PathCategories = ({ categories }: PathCategoriesProps) => {
  return (
    <ol>
      {categories.map((category, index) => (
        <li key={index}>
          <span>{category}</span>
        </li>
      ))}
    </ol>
  );
};

export default memo(PathCategories);
