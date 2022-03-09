type PathCategoriesProps = {
  categories: string[];
};

const PathCategories = ({ categories }: PathCategoriesProps) => {
  return (
    <ol>
      {categories.map((category, index) => (
        <span key={index}>{category}</span>
      ))}
    </ol>
  );
};

export default PathCategories;
