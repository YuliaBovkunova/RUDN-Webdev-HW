import phoneContactStyles from './PhoneContact.module.css';

type PhoneContactProps = {
  iconSrc: string;
};

export const PhoneContact = ({ iconSrc }: PhoneContactProps) => {
  return (
    <div className={phoneContactStyles.phoneContact}>
      <img
        src={iconSrc}
        alt="Телефон"
        className={phoneContactStyles.icon}
      />
      <div className={phoneContactStyles.phoneGroup}>
        <div className={phoneContactStyles.phoneNumber}>8 (812) 844-95-49</div>
        <div className={phoneContactStyles.schedule}>Ежедневно с 9:00 до 20:00</div>
      </div>
    </div>
  );
};
