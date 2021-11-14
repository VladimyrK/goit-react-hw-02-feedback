import React, { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  BUTTONS_NAMES = [
    { id: '1', name: 'Good' },
    { id: '2', name: 'Neutral' },
    { id: '3', name: 'Bad' },
  ];

  countTotalFeedback = () => {
    this.setState(prev => {
      return { total: prev.good + prev.neutral + prev.bad };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prev => {
      return { positive: Math.round((prev.good / prev.total) * 100) };
    });
  };

  onLeaveFeedback = name => {
    name = name.toLowerCase();
    this.setState(prev => {
      return { [name]: prev[name] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad, total, positive } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.BUTTONS_NAMES}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positive={positive}
            ></Statistics>
          ) : (
            <p>Nothing here yet, but you could leave your feedback</p>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
