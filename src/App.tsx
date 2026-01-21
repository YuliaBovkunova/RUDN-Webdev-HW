import './App.css';
import { TopBar } from './pages/TopBar/TopBar';
import { Catalog } from './pages/Catalog/Catalog';
import { ImageGallery } from './pages/ImageGallery/ImageGallery';
import { BottomBar } from './pages/BottomBar/BottomBar';

function App() {
  return (
    <>
      <TopBar />
      <Catalog />
      <ImageGallery />
      <BottomBar />
    </>
  );
}

export default App;
