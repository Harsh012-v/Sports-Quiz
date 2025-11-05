import React from 'react';

function Layout({ children }) {
  return (
    <div style={styles.layout}>
      <header style={styles.header}>
        <h1 style={styles.title}>Sports Quiz Challenge</h1>
      </header>
      <main style={styles.main}>
        {children}
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2025 Sports Quiz App</p>
      </footer>
    </div>
  );
}

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  main: {
    flex: 1,
    padding: '20px',
  },
  footer: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '15px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#666',
  },
};

export default Layout;
