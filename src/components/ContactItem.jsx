import { useState } from 'react';

export default function ContactItem({ contact, onDelete, onEdit }) {
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
      border: '1px solid #3498db',
      borderRadius: '8px',
      backgroundColor: '#f0f8ff'
    }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginRight: '8px', padding: '4px', width: '40%' }}
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ marginRight: '8px', padding: '4px', width: '40%' }}
          />
          <button onClick={handleSave} style={{ backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px' }}>
            Сохранить
          </button>
          <button onClick={handleCancel} style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px', marginLeft: '6px' }}>
            Отмена
          </button>
        </>
      ) : (
        <>
          <span><strong>{name}</strong> — {phone}</span>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              style={{ backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px', marginRight: '6px' }}
            >
              Редактировать
            </button>
            <button
              onClick={() => onDelete(contact.id)}
              style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px' }}
            >
              Удалить
            </button>
          </div>
        </>
      )}
    </div>
  );
}