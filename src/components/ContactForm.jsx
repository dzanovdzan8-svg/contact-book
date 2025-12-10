import { useState } from 'react';

export default function ContactForm({ onAdd, theme }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      onAdd({ name, phone });
      setName('');
      setPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      marginBottom: '20px',
      padding: '16px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      border: `1px solid ${theme.accent}`
    }}>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '8px',
          marginRight: '8px',
          borderRadius: '4px',
          border: `1px solid ${theme.accent}`,
          width: '40%'
        }}
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          padding: '8px',
          marginRight: '8px',
          borderRadius: '4px',
          border: `1px solid ${theme.accent}`,
          width: '40%'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 16px',
          backgroundColor: theme.accent,
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = theme.text}
        onMouseOut={(e) => e.target.style.backgroundColor = theme.accent}
      >
        Добавить
      </button>
    </form>
  );
}