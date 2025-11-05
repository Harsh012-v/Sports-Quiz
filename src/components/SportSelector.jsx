import React from 'react';

function SportSelector({ selectedSport, onSelectSport }) {
  const sports = [
    { id: 'football', name: 'Football', icon: '⚽' },
    { id: 'basketball', name: 'Basketball', icon: '🏀' },
    { id: 'cricket', name: 'Cricket', icon: '🏏' },
    { id: 'tennis', name: 'Tennis', icon: '🎾' },
  ];

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Choose Your Sport</h3>
      <div style={styles.grid}>
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => onSelectSport(sport.id)}
            style={{
              ...styles.sportCard,
              ...(selectedSport === sport.id ? styles.sportCardActive : {})
            }}
          >
            <span style={styles.icon}>{sport.icon}</span>
            <span style={styles.name}>{sport.name}</span>
          </button>
        ))}
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
  },
  sportCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    background: 'white',
    transition: 'all 0.3s ease',
  },
  sportCardActive: {
    border: '2px solid #667eea',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
    transform: 'scale(1.05)',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '10px',
  },
  name: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
  },
};

export default SportSelector;
