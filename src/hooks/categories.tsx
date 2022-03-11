import { createContext, useCallback, useContext, useState } from 'react';

type CategoriesContextData = {
  addCategories(categories: string[]): void;
  categories: string[];
};

const CategoriesContext = createContext<CategoriesContextData>(
  {} as CategoriesContextData
);

type CategoriesProviderProps = {
  children: React.ReactNode;
};

const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categories, setCategories] = useState<string[]>([]);

  const addCategories = useCallback((categories: string[]) => {
    setCategories(categories);
  }, []);

  return (
    <CategoriesContext.Provider value={{ addCategories, categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

function useCategories(): CategoriesContextData {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }

  return context;
}

export { CategoriesProvider, useCategories, CategoriesContext };
