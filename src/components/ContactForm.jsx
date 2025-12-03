import { useState } from 'react';

export default function ContactForm({ onAdd }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      onAdd({ id: Date.now(), name, phone, description });
      setName('');
      setPhone('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <input
        type="text"
        placeholder="Имя *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          transition: 'border-color 0.3s ease',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#63b3ed')}
        onBlur={(e) => (e.target.style.borderColor = '#ccc')}
      />
      <input
        type="tel"
        placeholder="Телефон *"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          transition: 'border-color 0.3s ease',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#63b3ed')}
        onBlur={(e) => (e.target.style.borderColor = '#ccc')}
      />
      <textarea
        placeholder="Описание (необязательно)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="2"
        style={{
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          resize: 'vertical',
          transition: 'border-color 0.3s ease',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#63b3ed')}
        onBlur={(e) => (e.target.style.borderColor = '#ccc')}
      />
      <button
        type="submit"
        style={{
          padding: '12px',
          borderRadius: '8px',
          backgroundColor: '#63b3ed',
          color: 'white',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          fontWeight: 'bold',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#4a90e2')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#63b3ed')}
        onClick={(e) => (e.target.style.transform = 'scale(1.02)')}
        onTransitionEnd={(e) => (e.target.style.transform = 'scale(1)')}
      >
        ➕ Добавить контакт
      </button>
    </form>
  );
}