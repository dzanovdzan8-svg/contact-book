import { useState } from 'react';

export default function ContactItem({ contact, onDelete, onEdit, theme }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);

  const handleSave = () => {
    if (name.trim() && phone.trim()) {
      onEdit(contact.id, name, phone);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setName(contact.name);
    setPhone(contact.phone);
    setIsEditing(false);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px',
      margin: '8px 0',
      border: `1px solid ${theme.accent}`,
      borderRadius: '8px',
      backgroundColor: 'white',
      transition: 'box-shadow 0.2s',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
    }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              marginRight: '8px',
              padding: '4px',
              width: '40%',
              border: `1px solid ${theme.accent}`,
              borderRadius: '4px'
            }}
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              marginRight: '8px',
              padding: '4px',
              width: '40%',
              border: `1px solid ${theme.accent}`,
              borderRadius: '4px'
            }}
          />
          <button onClick={handleSave} style={{
            backgroundColor: theme.accent,
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '4px 8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}>
            Сохранить
          </button>
          <button onClick={handleCancel} style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '4px 8px',
            marginLeft: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}>
            Отмена
          </button>
        </>
      ) : (
        <>
          <span><strong style={{ color: theme.text }}>{name}</strong> — {phone}</span>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                backgroundColor: theme.accent,
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 8px',
                marginRight: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = theme.text}
              onMouseOut={(e) => e.target.style.backgroundColor = theme.accent}
            >
              Редактировать
            </button>
            <button
              onClick={() => onDelete(contact.id)}
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
            >
              Удалить
            </button>
          </div>
        </>
      )}
    </div>
  );
}