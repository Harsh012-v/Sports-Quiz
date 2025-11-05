import React from 'react';

function ScoreDisplay({ score, total, percentage }) {
  const getScoreColor = () => {
    if (percentage >= 80) return '#4CAF50';
    if (percentage >= 60) return '#FFA726';
    return '#EF5350';
  };

  return (
    <div style={styles.container}>
      <div style={styles.scoreCircle}>
        <div style={{ ...styles.percentage, color: getScoreColor() }}>
          {percentage}%
        </div>
        <div style={styles.scoreText}>
          {score} / {total}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  scoreCircle: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    border: '8px solid #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
  },
  percentage: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '5px',
  },
  scoreText: {
    fontSize: '1.2rem',
    color: '#666',
    fontWeight: '500',
  },
};

export default ScoreDisplay;
