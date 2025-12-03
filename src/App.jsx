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
  });

  const handleAddContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div
      style={{
        padding: '20px',
        minHeight: '100vh',
        backgroundColor: theme.bg,
        color: theme.text,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ color: theme.accent }}>Книга контактов</h1>
      <ThemeSelector onThemeChange={handleThemeChange} />
      <ContactForm onAdd={handleAddContact} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} theme={theme} />
    </div>
  );
}