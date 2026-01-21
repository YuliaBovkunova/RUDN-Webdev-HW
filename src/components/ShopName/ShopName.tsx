import shopNameStyles from './ShopName.module.css';

export const ShopName = () => {
  return (
    <div className={shopNameStyles.shopName}>
      <div className={shopNameStyles.titleWrapper}>
        <h1 className={shopNameStyles.title}>Сладкий сундук</h1>
      </div>
    </div>
  );
};
