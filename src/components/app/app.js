import React from 'react';
import SkillBar from "../main-page-components/skill-bar";

const App = () => {
  return (
    <SkillBar skills={[
      {
        value: '10',
        label: 'a'
      },
      {
        value: '90',
        label: 'b'
      }
    ]} />
  );
};

export default App;
