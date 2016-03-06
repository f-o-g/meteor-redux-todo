import {Tasks} from '/lib/collections'
import {Meteor} from 'meteor/meteor'

Meteor.publish('tasks', () => {
  return Tasks.find({})
})
