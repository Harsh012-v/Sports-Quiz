import React from 'react';

function QuizTimer({ timeLeft }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const getTimerColor = () => {
    if (timeLeft > 120) return '#4CAF50';
    if (timeLeft > 60) return '#FFA726';
    return '#EF5350';
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>⏱️</div>
      <div style={{ ...styles.time, color: getTimerColor() }}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '25px',
    padding: '15px',
    background: 'rgba(0, 0, 0, 0.03)',
    borderRadius: '10px',
  },
  icon: {
    fontSize: '1.5rem',
  },
  time: {
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: 'monospace',
  },
};

export default QuizTimer;
