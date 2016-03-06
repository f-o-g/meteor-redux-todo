import {Todos} from '/lib/collections'
import {Meteor} from 'meteor/meteor'

Meteor.publish('todos', () => {
  return Todos.find({})
})
