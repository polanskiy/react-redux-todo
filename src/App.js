import React from 'react';
import { GlobalBox, ContentBox } from './styles/common';
import Header from './views/Header';
import Tasks from './views/Tasks/Tasks';

function App() {
  return (
    <GlobalBox>
      <Header />
      <ContentBox>
        <Tasks />
      </ContentBox>
    </GlobalBox>
  );
}

export default App;
