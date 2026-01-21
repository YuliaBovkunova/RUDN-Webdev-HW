import { useMemo } from 'react';
import quantitySelectorStyles from './QuantitySelector.module.css';

type QuantitySelectorProps = {
  currentQuantity: number;
  onQuantityChange: (newQuantity: number) => void;
  unitPrice: number;
};

export const QuantitySelector = ({
  currentQuantity,
  onQuantityChange,
  unitPrice,
}: QuantitySelectorProps) => {
  const handleIncrement = () => {
    onQuantityChange(currentQuantity + 1);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(0, currentQuantity - 1);
    onQuantityChange(newQuantity);
  };

  const totalCost = useMemo(() => {
    return unitPrice * currentQuantity;
  }, [unitPrice, currentQuantity]);

  return (
    <div className={quantitySelectorStyles.selector}>
      <div className={quantitySelectorStyles.controls}>
        <button
          className={quantitySelectorStyles.button}
          onClick={handleDecrement}
          type="button"
        >
          –
        </button>

        <span className={quantitySelectorStyles.quantity}>{currentQuantity}</span>

        <button
          className={quantitySelectorStyles.button}
          onClick={handleIncrement}
          type="button"
        >
          +
        </button>
      </div>

      <span className={quantitySelectorStyles.total}>{totalCost} ₽</span>
    </div>
  );
};
