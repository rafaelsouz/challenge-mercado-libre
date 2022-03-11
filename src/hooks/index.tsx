import { CategoriesProvider } from './categories';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <CategoriesProvider>{children}</CategoriesProvider>
);

export default AppProvider;
