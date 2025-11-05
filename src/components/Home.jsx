import React from 'react';
import { useNavigate } from 'react-router-dom';
import SportSelector from './SportSelector';

function Home() {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = React.useState('');

  const handleStartQuiz = () => {
    if (selectedSport) {
      navigate('/quiz', { state: { sport: selectedSport } });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome to Sports Quiz!</h2>
        <p style={styles.description}>
          Test your sports knowledge across different categories.
          Select a sport below to get started!
        </p>

        <SportSelector
          selectedSport={selectedSport}
          onSelectSport={setSelectedSport}
        />

        <button
          onClick={handleStartQuiz}
          disabled={!selectedSport}
          style={{
            ...styles.button,
            ...(selectedSport ? styles.buttonActive : styles.buttonDisabled)
          }}
        >
          Start Quiz
        </button>
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
    padding: '40px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '15px',
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '30px',
    textAlign: 'center',
    lineHeight: '1.6',
  },
  button: {
    width: '100%',
    padding: '15px 30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '10px',
    marginTop: '20px',
    transition: 'all 0.3s ease',
  },
  buttonActive: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
  },
  buttonDisabled: {
    background: '#ccc',
    color: '#666',
    cursor: 'not-allowed',
  },
};

export default Home;
