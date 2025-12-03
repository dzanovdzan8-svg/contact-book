import { useState, useEffect } from 'react';

const themes = {
  'morning-mist': {
    bg: '#f5f7fa',
    text: '#2d3748',
    accent: '#63b3ed',
    cardBg: '#ffffff',
    shadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
  'lavender-dusk': {
    bg: '#f3e8ff',
    text: '#4c1d95',
    accent: '#a78bfa',
    cardBg: '#ffffff',
    shadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
  'seafoam': {
    bg: '#e6f7f4',
    text: '#0d5c4f',
    accent: '#4fd1c5',
    cardBg: '#ffffff',
    shadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
  'peach-dawn': {
    bg: '#fff5e6',
    text: '#c76b47',
    accent: '#f6ad55',
    cardBg: '#ffffff',
    shadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
  'mint-morning': {
    bg: '#f0fdf9',
    text: '#1e796d',
    accent: '#38b2ac',
    cardBg: '#ffffff',
    shadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
};

export default function ThemeSelector({ onThemeChange }) {
  const [currentTheme, setCurrentTheme] = useState('morning-mist');

  useEffect(() => {
    onThemeChange(themes[currentTheme]);
  }, [currentTheme, onThemeChange]);

  return (
    <div style={{ marginBottom: '16px', textAlign: 'center' }}>
      <label
        style={{
          marginRight: '8px',
          fontSize: '1rem',
          fontWeight: 'bold',
          color: themes[currentTheme].text,
        }}
      >
        🌈 Тема:
      </label>
      <select
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
        style={{
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          backgroundColor: themes[currentTheme].bg,
          color: themes[currentTheme].text,
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.borderColor = themes[currentTheme].accent)}
        onMouseLeave={(e) => (e.target.style.borderColor = '#ccc')}
      >
        <option value="morning-mist">Утренний туман</option>
        <option value="lavender-dusk">Лавандовый закат</option>
        <option value="seafoam">Морская пена</option>
        <option value="peach-dawn">Персиковый рассвет</option>
        <option value="mint-morning">Мятное утро</option>
      </select>
    </div>
  );
}