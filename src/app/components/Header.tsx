import React, { useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC<{ onSearch: (value: string) => void }> = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="App Logo" />
      </div>
      <div className={`${styles.searchContainer} ${menuOpen ? styles.show : ''}`}>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => onSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <button className={styles.menuButton} onClick={handleMenuToggle}>
        ☰
      </button>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => onSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
