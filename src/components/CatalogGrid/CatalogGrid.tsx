import { CatalogItem } from '../CatalogItem/CatalogItem';
import catalogGridStyles from './CatalogGrid.module.css';
import { getCakeItems } from './cakeItemsData';

export const CatalogGrid = () => {
  const items = getCakeItems();

  return (
    <div className={catalogGridStyles.grid}>
      {items.map((item) => (
        <CatalogItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          priceText={item.priceText}
          imagePath={item.imagePath}
          imageAlt={item.imageAlt}
          unitPrice={item.unitPrice}
        />
      ))}
    </div>
  );
};
