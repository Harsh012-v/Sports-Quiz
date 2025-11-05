import React from 'react';

function QuestionCard({ question, onAnswer, selectedAnswer }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.question}>{question.question}</h2>
      <div style={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            style={{
              ...styles.option,
              ...(selectedAnswer === index ? styles.optionSelected : {})
            }}
          >
            <span style={styles.optionLabel}>{String.fromCharCode(65 + index)}</span>
            <span style={styles.optionText}>{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
  },
  question: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    color: '#333',
    lineHeight: '1.4',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '15px 20px',
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    background: 'white',
    textAlign: 'left',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  optionSelected: {
    border: '2px solid #667eea',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
  },
  optionLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  optionText: {
    flex: 1,
    color: '#333',
  },
};

export default QuestionCard;
