import React from 'react'
import { useDispatch } from 'react-redux'
import { dispatchSrpcCall as createDispatchSrpcCall } from 'redux-srpc'
import { useLocalStorage } from '@rehooks/local-storage'

import { SAVE_MESSAGE } from '../../../../../../../../srpcFunctionNames'

export default ({ messageId }) => {
  const [jwt] = useLocalStorage('jwt')

  const dispatch = useDispatch()

  const dispatchSrpcCall = createDispatchSrpcCall(dispatch)

  const dispatchSaveMessage = content => dispatchSrpcCall(SAVE_MESSAGE, { jwt, content, parentMessageId: messageId })

  return <span>
    <button onClick={() => dispatchSaveMessage('Yes')}>Yes</button>
    <button onClick={() => dispatchSaveMessage('No')}>No</button>
  </span>
}