import locationContactStyles from './LocationContact.module.css';

type LocationContactProps = {
  iconSrc: string;
};

export const LocationContact = ({ iconSrc }: LocationContactProps) => {
  return (
    <div className={locationContactStyles.locationContact}>
      <div className={locationContactStyles.locationRow}>
        <img
          src={iconSrc}
          alt="Адрес компании"
          className={locationContactStyles.icon}
        />
        <div className={locationContactStyles.text}>
          г. Санкт Петербург, <br />
          ул. Куйбышева 31
        </div>
      </div>
    </div>
  );
};
