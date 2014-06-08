# todo.coffee
jQuery ->
 
  class Todo extends Backbone.Model
    initialize:->
      console.dir("Todo#initialize")
 
  class TodoList extends Backbone.Collection
    model:Todo
 
  class TodoView extends Backbone.View
    el:"#todoDiv"
    events:'click button':'addTodo'
    initialize:->
      console.dir("TodoView#initialize")
      @collection = new TodoList
      @collection.bind "add", @render, @
 
    render:(todo) ->
      $(@el).children("ul").append(@template(todo))
 
    addTodo:->
      todo = new Todo({content:$("#new-todo").val()})
      @collection.add todo
 
    template:(todo) ->
      "<li>" + todo.get("content") + "</li>"
 
  todo_view = new TodoView
