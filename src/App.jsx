import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export default function App() {
  const [contacts, setContacts] = useState([]);

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
      backgroundColor: '#e6f2ff',
      minHeight: '100vh'
    }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Книга контактов</h1>
      <ContactForm onAdd={handleAddContact} />
      <ContactList
        contacts={contacts}
        onDelete={handleDeleteContact}
        onEdit={handleEditContact}
      />
    </div>
  );
}