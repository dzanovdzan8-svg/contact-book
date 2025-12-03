import ContactItem from './ContactItem';

export default function ContactList({ contacts, onDelete, theme }) {
  return (
    <div>
      {contacts.length === 0 ? (
        <p
          style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: theme.text,
            fontStyle: 'italic',
            padding: '20px',
            backgroundColor: theme.cardBg,
            borderRadius: '12px',
            boxShadow: theme.shadow,
          }}
        >
          📄 Нет контактов. Добавьте первый!
        </p>
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