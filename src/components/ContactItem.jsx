import { useState } from 'react';

export default function ContactItem({ contact, onDelete, theme }) {
  const { name, phone, description } = contact;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        padding: '16px',
        marginBottom: '12px',
        borderRadius: '12px',
        border: `1px solid ${theme.accent}40`,
        backgroundColor: `${theme.accent}08`,
        color: theme.text,
        boxShadow: isHovered ? `0 6px 16px ${theme.accent}20` : theme.shadow,
        transition: `${theme.transition}, box-shadow 0.3s ease`,
        cursor: 'pointer',
        animation: 'fadeIn 0.5s ease-in-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '8px',
        }}
      >
        <div>
          <strong style={{ fontSize: '1.1rem', color: theme.accent }}>{name}</strong>
          <div style={{ marginTop: '4px', fontSize: '0.9rem' }}>📞 {phone}</div>
        </div>
        <button
          onClick={() => onDelete(contact.id)}
          style={{
            padding: '6px 12px',
            borderRadius: '6px',
            backgroundColor: theme.accent,
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.8rem',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#4a90e2')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = theme.accent)}
        >
          Удалить
        </button>
      </div>
      {description && (
        <div
          style={{
            marginTop: '8px',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            lineHeight: '1.4',
            padding: '8px',
            backgroundColor: `${theme.accent}10`,
            borderRadius: '8px',
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
}

