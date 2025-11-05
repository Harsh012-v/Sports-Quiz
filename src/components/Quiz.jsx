import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import QuizTimer from './QuizTimer';
import LoadingQuiz from './LoadingQuiz';

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const sport = location.state?.sport || 'football';

  const [questions] = React.useState([
    {
      id: 1,
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['Brazil', 'Germany', 'France', 'Argentina'],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: 'How many players are on a football team on the field?',
      options: ['9', '10', '11', '12'],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: 'What is the duration of a standard football match?',
      options: ['80 minutes', '90 minutes', '100 minutes', '120 minutes'],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: 'Which player has won the most Ballon d\'Or awards?',
      options: ['Cristiano Ronaldo', 'Lionel Messi', 'Zinedine Zidane', 'Ronaldinho'],
      correctAnswer: 1,
    },
    {
      id: 5,
      question: 'What color card does a referee show for a serious foul?',
      options: ['Yellow', 'Red', 'Blue', 'Green'],
      correctAnswer: 1,
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [timeLeft, setTimeLeft] = React.useState(300);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  React.useEffect(() => {
    if (timeLeft > 0 && !isLoading) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleFinishQuiz();
    }
  }, [timeLeft, isLoading]);

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = () => {
    const score = answers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    navigate('/results', {
      state: {
        score,
        total: questions.length,
        answers,
        questions,
        sport,
      },
    });
  };

  if (isLoading) {
    return <LoadingQuiz sport={sport} />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <QuizTimer timeLeft={timeLeft} />

        <div style={styles.progress}>
          <div style={styles.progressText}>
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <QuestionCard
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          selectedAnswer={answers[currentQuestion]}
        />
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
  progress: {
    marginBottom: '30px',
  },
  progressText: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '10px',
    textAlign: 'center',
  },
  progressBar: {
    width: '100%',
    height: '8px',
    background: '#e0e0e0',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    transition: 'width 0.3s ease',
  },
};

export default Quiz;
