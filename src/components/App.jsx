import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistics';
import Notification from './Notification/Notification';
import css from './App.module.css';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClicked = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

    return (
      <div className={css.container}>
        <Section title="Please Leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onBtnClicked} />
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistic good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          ) : (
            <Notification message="There is no feedback" />
          )
          }
        </Section>
      </div>
    )
}





