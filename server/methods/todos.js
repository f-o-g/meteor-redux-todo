import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'
import {Todos} from '/lib/collections'

Meteor.methods({
  addTodo(name) {
    check(name, String)
    console.log('ADD TODO METHOD', name);
    const id = Todos.insert({name: name})
    console.log('ID', id)
    return {
      id,
      name
    }
  },
  removetaks({id}) {
    check(id, [String])
    Todos.remove({_id: id})
    return {
      success: true
    }
  }
})
