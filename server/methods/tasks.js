import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'
import {Tasks} from '/lib/collections'

Meteor.methods({
  addTask({task}) {
    check(task, {
        name: String
    })
    Tasks.insert({name: task.name})
    return {
      success: true
    }
  },
  removetaks({id}) {
    check(id, [String])
    Tasks.remove({_id: id})
    return {
      success: true
    }
  }
})
