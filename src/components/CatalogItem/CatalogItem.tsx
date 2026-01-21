import { useState } from 'react';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import catalogItemStyles from './CatalogItem.module.css';

type CatalogItemProps = {
  id: number;
  title: string;
  description: string;
  priceText: string;
  imagePath: string;
  imageAlt: string;
  unitPrice: number;
};

export const CatalogItem = ({
  title,
  description,
  priceText,
  imagePath,
  imageAlt,
  unitPrice,
}: CatalogItemProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleOrderClick = () => {
    setQuantity(1);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <div className={catalogItemStyles.item}>
      <div className={catalogItemStyles.imageContainer}>
        <img src={imagePath} alt={imageAlt} />
      </div>

      <div className={catalogItemStyles.details}>
        <h3 className={catalogItemStyles.itemTitle}>{title}</h3>
        <p className={catalogItemStyles.itemDescription}>{description}</p>

        <div className={catalogItemStyles.bottomSection}>
          <span className={catalogItemStyles.priceLabel}>{priceText}</span>

          {quantity === 0 ? (
            <button
              className={catalogItemStyles.orderBtn}
              onClick={handleOrderClick}
            >
              Заказать
            </button>
          ) : (
            <QuantitySelector
              currentQuantity={quantity}
              onQuantityChange={handleQuantityChange}
              unitPrice={unitPrice}
            />
          )}
        </div>
      </div>
    </div>
  );
};
