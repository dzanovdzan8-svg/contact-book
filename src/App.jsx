import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [theme, setTheme] = useState('morning');

  const themes = {
    morning: { name: 'Утренний туман', bg: '#f0f8ff', accent: '#3498db', text: '#2c3e50' },
    lavender: { name: 'Лавандовый закат', bg: '#f8f4ff', accent: '#9b59b6', text: '#4a235a' },
    sea: { name: 'Морская пена', bg: '#f0fff8', accent: '#1abc9c', text: '#16a085' },
    peach: { name: 'Персиковый рассвет', bg: '#fff5ee', accent: '#e67e22', text: '#d35400' },
    mint: { name: 'Мятное утро', bg: '#f5fff5', accent: '#2ecc71', text: '#27ae60' }
  };

  const currentTheme = themes[theme];

  const handleAddContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleEditContact = (id, name, phone) => {
    setContacts(
      contacts.map(contact =>
        contact.id === id ? { ...contact, name, phone } : contact
      )
    );
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: currentTheme.bg,
      minHeight: '100vh',
      transition: 'background-color 0.3s ease'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{
          color: currentTheme.accent,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span>📒</span>
          Книга контактов
        </h1>
        <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: currentTheme.text, fontWeight: 'bold' }}>🌈 Тема:</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '6px',
              border: `1px solid ${currentTheme.accent}`,
              backgroundColor: 'white',
              color: currentTheme.text,
              cursor: 'pointer'
            }}
          >
            {Object.keys(themes).map(key => (
              <option key={key} value={key}>{themes[key].name}</option>
            ))}
          </select>
        </div>
      </div>

      <ContactForm onAdd={handleAddContact} theme={currentTheme} />
      <ContactList
        contacts={contacts}
        onDelete={handleDeleteContact}
        onEdit={handleEditContact}
        theme={currentTheme}
      />
    </div>
  );
}