import React from 'react';
import { GlobalBox, MainBox, ContentBox } from './styles/common';
import Header from './views/Header';
import Tasks from './views/Tasks/Tasks';

function App() {
  return (
    <GlobalBox>
      <MainBox>
        <Header />
        <ContentBox>
          <Tasks />
        </ContentBox>
      </MainBox>
    </GlobalBox>
  );
}

export default App;
