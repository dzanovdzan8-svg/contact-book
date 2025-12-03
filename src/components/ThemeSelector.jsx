import { useState, useEffect } from 'react';

const themes = {
  'morning-mist': { bg: '#f5f7fa', text: '#2d3748', accent: '#63b3ed' },
  'lavender-dusk': { bg: '#f3e8ff', text: '#4c1d95', accent: '#a78bfa' },
  'seafoam': { bg: '#e6f7f4', text: '#0d5c4f', accent: '#4fd1c5' },
  'peach-dawn': { bg: '#fff5e6', text: '#c76b47', accent: '#f6ad55' },
  'mint-morning': { bg: '#f0fdf9', text: '#1e796d', accent: '#38b2ac' },
};

export default function ThemeSelector({ onThemeChange }) {
  const [currentTheme, setCurrentTheme] = useState('morning-mist');

  useEffect(() => {
    onThemeChange(themes[currentTheme]);
  }, [currentTheme, onThemeChange]);

  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ marginRight: '8px' }}>Тема: </label>
      <select
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
        style={{
          padding: '4px 8px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          backgroundColor: themes[currentTheme].bg,
          color: themes[currentTheme].text,
        }}
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