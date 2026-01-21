import navigationLinksStyles from './NavigationLinks.module.css';

export const NavigationLinks = () => {
  const linkTexts = [
    'Согласие на обработку данных',
    'Служба поддержки',
    'Политика конфиденциальности',
  ];

  return (
    <ul className={navigationLinksStyles.list}>
      {linkTexts.map((text, index) => (
        <li key={index}>
          <a href="#" className={navigationLinksStyles.link}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
