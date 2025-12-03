import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ThemeSelector from './components/ThemeSelector';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [theme, setTheme] = useState({
    bg: '#f5f7fa',
    text: '#2d3748',
    accent: '#63b3ed',
    cardBg: '#ffffff',
    shadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  });

  const handleAddContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleThemeChange = (newTheme) => {
    setTheme({
      ...newTheme,
      cardBg: '#ffffff',
      shadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
    });
  };

  return (
    <div
      style={{
        padding: '20px',
        minHeight: '100vh',
        backgroundColor: theme.bg,
        color: theme.text,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: theme.transition,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          color: theme.accent,
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '10px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        📒 Книга контактов
      </h1>

      <ThemeSelector onThemeChange={handleThemeChange} />

      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: theme.cardBg,
          borderRadius: '16px',
          padding: '20px',
          boxShadow: theme.shadow,
          transition: theme.transition,
        }}
      >
        <ContactForm onAdd={handleAddContact} />
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: theme.cardBg,
          borderRadius: '16px',
          padding: '20px',
          boxShadow: theme.shadow,
          transition: theme.transition,
        }}
      >
        <h2
          style={{
            color: theme.accent,
            fontSize: '1.5rem',
            marginBottom: '10px',
            borderBottom: `2px solid ${theme.accent}`,
            paddingBottom: '8px',
          }}
        >
          Мои контакты
        </h2>
        <ContactList contacts={contacts} onDelete={handleDeleteContact} theme={theme} />
      </div>
    </div>
  );
}