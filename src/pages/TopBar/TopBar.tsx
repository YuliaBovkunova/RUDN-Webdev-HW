import { TopBarWrapper } from './TopBarWrapper';
import topBarStyles from './TopBar.module.css';

export const TopBar = () => {
  return (
    <header className={topBarStyles.topBar}>
      <div className={topBarStyles.container}>
        <TopBarWrapper />
      </div>
    </header>
  );
};
