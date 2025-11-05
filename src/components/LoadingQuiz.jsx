import React from 'react';

function LoadingQuiz({ sport }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.spinner}></div>
        <h2 style={styles.title}>Preparing Your Quiz...</h2>
        <p style={styles.subtitle}>Loading {sport} questions</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
  },
  card: {
    background: 'white',
    borderRadius: '20px',
    padding: '60px 40px',
    textAlign: 'center',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
  },
  spinner: {
    width: '60px',
    height: '60px',
    margin: '0 auto 30px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #667eea',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
  },
};

const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default LoadingQuiz;
