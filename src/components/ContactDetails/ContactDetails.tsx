import { LocationContact } from './LocationContact';
import { PhoneContact } from './PhoneContact';
import contactDetailsStyles from './ContactDetails.module.css';
import locationIcon from '../../assets/images/header/location-icon.png';
import phoneIcon from '../../assets/images/header/phone-icon.png';

export const ContactDetails = () => {
  return (
    <div className={contactDetailsStyles.contactDetails}>
      <LocationContact iconSrc={locationIcon} />
      <PhoneContact iconSrc={phoneIcon} />
    </div>
  );
};
