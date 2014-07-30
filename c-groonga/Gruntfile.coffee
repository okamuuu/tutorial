module.exports = (grunt) ->

  grunt.initConfig
    watch:
      files: 'grn.c'
      tasks: ['compile']

  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'compile', 'my local task.', ()->
    exec = require('child_process').exec
    done = this.async()
    command = 'gcc -Wall `pkg-config --cflags --libs groonga` grn.c -o grn.o && ./grn.o'
    options = { timeout: 1000 }
    callback = (err, stdout, stderr)->
      console.error err if err
      console.log(stdout)
      do done
  
    exec(command, options, callback)

  grunt.registerTask 'default', ['compile', 'watch']
