import { useState } from 'react';  
import styles from './Evolve.module.css';
import Header from '../components/Header';
import ViewNav from '../components/ViewNav';
import TitleSection from '../components/TitleSection';
import SubtitleSection from '../components/SubtitleSection';
import GridContainer from '../components/GridContainer';
import Modal from '../components/Modal';

function Evolve() {
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('sum');

  const addItem = (name, desc) => {
    const newItem = { id: Date.now(), name, desc };
    setItems((prev) => [...prev, newItem]);
    setModalVisible(false);
  };

  return (
    <div className={theme === 'light' ? styles.lightTheme : styles.darkTheme}>
      <Header theme={theme} view={view} setView={setView} />
      <ViewNav setTheme={setTheme} theme={theme} />
      <TitleSection />
      <SubtitleSection theme={theme} view={view} />
      <GridContainer theme={theme} items={items} onAddClick={() => setModalVisible(true)} />
      {modalVisible && (
        <Modal onConfirm={addItem} onClose={() => setModalVisible(false)} />
      )}
    </div>
  );
}

export default Evolve;
