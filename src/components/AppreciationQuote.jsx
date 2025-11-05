import React from 'react';

function AppreciationQuote({ percentage }) {
  const getQuote = () => {
    if (percentage >= 90) {
      return {
        text: 'Outstanding performance!',
        subtext: 'You are a true sports expert!',
        emoji: '🏆',
      };
    } else if (percentage >= 70) {
      return {
        text: 'Great job!',
        subtext: 'You have excellent sports knowledge!',
        emoji: '🌟',
      };
    } else if (percentage >= 50) {
      return {
        text: 'Good effort!',
        subtext: 'Keep learning and improving!',
        emoji: '👍',
      };
    } else {
      return {
        text: 'Keep trying!',
        subtext: 'Practice makes perfect!',
        emoji: '💪',
      };
    }
  };

  const quote = getQuote();

  return (
    <div style={styles.container}>
      <div style={styles.emoji}>{quote.emoji}</div>
      <h3 style={styles.text}>{quote.text}</h3>
      <p style={styles.subtext}>{quote.subtext}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
    borderRadius: '12px',
    marginBottom: '30px',
  },
  emoji: {
    fontSize: '3rem',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '5px',
  },
  subtext: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default AppreciationQuote;
