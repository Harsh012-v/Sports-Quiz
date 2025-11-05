import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ScoreDisplay from './ScoreDisplay';
import PerformanceBreakdown from './PerformanceBreakdown';
import AppreciationQuote from './AppreciationQuote';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, answers, questions, sport } = location.state || {
    score: 0,
    total: 5,
    answers: [],
    questions: [],
    sport: 'football',
  };

  const percentage = Math.round((score / total) * 100);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Quiz Complete!</h2>

        <ScoreDisplay score={score} total={total} percentage={percentage} />

        <AppreciationQuote percentage={percentage} />

        <PerformanceBreakdown
          score={score}
          total={total}
          percentage={percentage}
        />

        <div style={styles.buttons}>
          <button
            onClick={() => navigate('/')}
            style={styles.button}
          >
            Try Another Quiz
          </button>
          <button
            onClick={() => navigate('/quiz', { state: { sport } })}
            style={{ ...styles.button, ...styles.buttonSecondary }}
          >
            Retry This Quiz
          </button>
        </div>
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
    padding: '20px',
  },
  card: {
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '700px',
    width: '100%',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#333',
    textAlign: 'center',
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    marginTop: '30px',
  },
  button: {
    flex: 1,
    padding: '15px 30px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    transition: 'all 0.3s ease',
  },
  buttonSecondary: {
    background: 'white',
    color: '#667eea',
    border: '2px solid #667eea',
  },
};

export default Results;
