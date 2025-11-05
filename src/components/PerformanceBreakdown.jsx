import React from 'react';

function PerformanceBreakdown({ score, total, percentage }) {
  const correct = score;
  const incorrect = total - score;

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Performance Breakdown</h3>

      <div style={styles.stats}>
        <div style={styles.stat}>
          <div style={styles.statIcon}>✅</div>
          <div style={styles.statInfo}>
            <div style={styles.statValue}>{correct}</div>
            <div style={styles.statLabel}>Correct</div>
          </div>
        </div>

        <div style={styles.stat}>
          <div style={styles.statIcon}>❌</div>
          <div style={styles.statInfo}>
            <div style={styles.statValue}>{incorrect}</div>
            <div style={styles.statLabel}>Incorrect</div>
          </div>
        </div>

        <div style={styles.stat}>
          <div style={styles.statIcon}>📊</div>
          <div style={styles.statInfo}>
            <div style={styles.statValue}>{percentage}%</div>
            <div style={styles.statLabel}>Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.3rem',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.03)',
    borderRadius: '12px',
  },
  statIcon: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  statInfo: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '5px',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#666',
  },
};

export default PerformanceBreakdown;
