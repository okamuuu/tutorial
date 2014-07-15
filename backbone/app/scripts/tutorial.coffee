Person = Backbone.Model.extend
  defaults: {
    name: 'Fetus',
    age: 0
  }
  initialize: ()->
    console.log "Hello"
    @on "change:name", (model)->
      name = model.get "name"
      console.log "Changed my name to " + name

person = new Person
  name: "Thomans"
  age: 67

person.set(name: 'Stewie Griffin')
