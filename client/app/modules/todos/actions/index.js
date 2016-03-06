import { Meteor } from 'meteor/meteor'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

export function* addTodo(action) {
   try {
      yield call(Meteor.call, 'addTodo', action.payload)
      yield put({type: 'ADDED_TODO'})
   } catch (e) {
      yield put({type: 'FAILED_ADD_TODO', message: e.message})
   }
}

export function* mySaga() {
  yield* takeEvery('ADD_TODO', addTodo);
}

export const addedTodo = () => {
  return {
      type: 'ADDED_TODO'
  }
}

export const failedAddTodo = (message) => {
  return {
      type: 'FAILED_ADD_TODO',
      message
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}