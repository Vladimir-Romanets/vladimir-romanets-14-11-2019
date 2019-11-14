import { all } from 'redux-saga/effects'

function* test() {
  yield console.log('test')
}

export default function* rootSaga() {
  yield all([
    test(),
  ])
}