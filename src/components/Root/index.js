import React from 'react'
import { Provider } from 'react-redux'
import projectXUI from 'project-x-ui'

import store from '../../store'

import MessageInput from './components/MessageInput'
import MessageList from './components/MessageList'
import GroupList from './components/GroupList'
import SignUp from './components/SignUp'
import GroupComposition from './components/GroupComposition'

const { shallow: { Body, Sidebar, MainScreen, QuestionCardsRow, GroupsContainer } } = projectXUI

export default () => (
  <Provider store={store}>
    <Body>
      <Sidebar>
        <GroupComposition />
        <GroupsContainer>
          <GroupList />
        </GroupsContainer>
        <MessageInput />
      </Sidebar>
      <MainScreen>
        <QuestionCardsRow title='Most answered'>
          <MessageList messageColumn='mostAnswered' />
        </QuestionCardsRow>
        <QuestionCardsRow title='Unanimous'>
          <MessageList messageColumn='unanimous' />
        </QuestionCardsRow>
        <QuestionCardsRow title='Latest'>
          <MessageList messageColumn='latest' />
        </QuestionCardsRow>
      </MainScreen>
    </Body>
    <SignUp />
  </Provider>
)
