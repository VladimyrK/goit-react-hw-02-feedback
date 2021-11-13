import React from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

import './App.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  BUTTONS_NAMES = ['Good', 'Neutral', 'Bad'];

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

  onLeaveFeedback = event => {
    this.setState(prev => {
      if (event.target.name === this.BUTTONS_NAMES[0]) {
        return { good: prev.good + 1 };
      }
      if (event.target.name === this.BUTTONS_NAMES[1]) {
        return { neutral: prev.neutral + 1 };
      }
      if (event.target.name === this.BUTTONS_NAMES[2]) {
        return { bad: prev.bad + 1 };
      }
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.BUTTONS_NAMES}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.state.total}
              positive={this.state.positive}
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
