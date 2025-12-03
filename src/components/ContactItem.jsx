export default function ContactItem({ contact, onDelete, theme }) {
  const { name, phone, description } = contact;

  return (
    <div
      style={{
        padding: '12px',
        marginBottom: '8px',
        borderRadius: '8px',
        border: `1px solid ${theme.accent}40`,
        backgroundColor: `${theme.accent}08`,
        color: theme.text,
      }}
    >
      <div><strong>{name}</strong></div>
      <div>📞 {phone}</div>
      {description && <div style={{ marginTop: '6px', fontStyle: 'italic' }}>{description}</div>}
      <button
        onClick={() => onDelete(contact.id)}
        style={{
          marginTop: '8px',
          padding: '4px 8px',
          backgroundColor: theme.accent,
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Удалить
      </button>
    </div>
  );
}