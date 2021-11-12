import React from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics good="0" bad="0" neutral="0"></Statistics>
        </Section>
      </div>
    );
  }
}

export default App;
