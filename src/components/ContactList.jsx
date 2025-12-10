import ContactItem from './ContactItem';

export default function ContactList({ contacts, onDelete, onEdit, theme }) {
  return (
    <div>
      {contacts.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#7f8c8d', fontStyle: 'italic' }}>
          Нет контактов
        </p>
      ) : (
        contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEdit}
            theme={theme}
          />
        ))
      )}
    </div>
  );
}