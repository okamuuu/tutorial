var obj = new Backbone.Model();
 
obj.set({name: "Murata"});
obj.set({age: 20});
 
console.log("obj: " + JSON.stringify(obj));
console.log("obj.name: " + obj.get("name"));
