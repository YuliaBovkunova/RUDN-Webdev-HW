import { ShopName } from '../../components/ShopName/ShopName';
import { ContactDetails } from '../../components/ContactDetails/ContactDetails';
import topBarStyles from './TopBar.module.css';

export const TopBarWrapper = () => {
  return (
    <div className={topBarStyles.wrapper}>
      <ShopName />
      <ContactDetails />
    </div>
  );
};
