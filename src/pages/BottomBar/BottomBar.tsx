import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { CopyrightInfo } from '../../components/CopyrightInfo/CopyrightInfo';
import bottomBarStyles from './BottomBar.module.css';

export const BottomBar = () => {
  return (
    <footer className={bottomBarStyles.footer}>
      <div className={bottomBarStyles.inner}>
        <div className={bottomBarStyles.section}>
          <NavigationLinks />
          <CopyrightInfo />
        </div>
      </div>
    </footer>
  );
};
