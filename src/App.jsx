import { useState } from 'react';
import './App.css';

const MenuItem = ({text, onSelect}) => {
  return (
    <a 
      href="#"
      className="menu-item"
      onClick={() => {
        onSelect()
      }}
    >
      {text}
    </a>
  );
};

const App = () => {

  const[menuOpened, setMenuOpened] = useState(false)

  const handleSelectItem = () => {
    setMenuOpened(false)
  }

  return (
    <>
      <header>
        <div className={menuOpened ? "menu" : "menu--closed"}>
          <button 
            className="menu__btn"
            onClick={() => {
              setMenuOpened(!menuOpened)
            }}
          >            
          </button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem} />
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem}/>
            <MenuItem text="Blog" onSelect={handleSelectItem} />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};

export default App
