import React from 'react';

export const StoreNoticeBanner = ({ 
  isOpen = true, 
  message = "المتجر متوقف عن استقبال الطلبات حالياً. سنعاود العمل قريباً!",
  onNotifyClick 
}) => {
  if (!isOpen) return null;

  return (
    <div style={styles.banner} role="alert">
      <div style={styles.container}>
        <div style={styles.content}>
          <span style={styles.icon}>⏳</span>
          <span>{message}</span>
        </div>
        {onNotifyClick && (
          <button style={styles.button} onClick={onNotifyClick}>
            نبهني عند الفتح
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  banner: {
    position: 'sticky',
    top: 0,
    width: '100%',
    backgroundColor: '#fff3cd',
    color: '#856404',
    borderBottom: '1px solid #ffeeba',
    padding: '12px 20px',
    zIndex: 9999,
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    direction: 'rtl',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justify-content: 'space-between',
    gap: '15px',
    flexWrap: 'wrap',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    fontWeight: '500',
  },
  icon: {
    fontSize: '18px',
  },
  button: {
    backgroundColor: '#856404',
    color: '#ffffff',
    border: 'none',
    padding: '6px 14px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};
