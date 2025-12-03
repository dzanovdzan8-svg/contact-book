import ContactItem from './ContactItem';

export default function ContactList({ contacts, onDelete, theme }) {
  return (
    <div>
      {contacts.length === 0 ? (
        <p>Нет контактов</p>
      ) : (
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            theme={theme}
          />
        ))
      )}
    </div>
  );
}