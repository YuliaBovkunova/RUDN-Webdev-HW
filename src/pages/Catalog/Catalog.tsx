import { CatalogTitle } from './CatalogTitle';
import { CatalogGrid } from '../../components/CatalogGrid/CatalogGrid';
import catalogStyles from './Catalog.module.css';

export const Catalog = () => {
  return (
    <section className={catalogStyles.catalog}>
      <div className="wrap">
        <CatalogTitle />
        <CatalogGrid />
      </div>
    </section>
  );
};
