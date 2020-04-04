import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'

import store from '../../store'

import MessageInput from './components/MessageInput'
import MessageList from './components/MessageList'

export default hot(() => <Provider store={store}><MessageList /><MessageInput /></Provider>)
