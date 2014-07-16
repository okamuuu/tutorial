require 'coffee-errors'
assert = require 'assert'
moment = require 'moment'
async = require 'async'

MongoClient = require('mongodb').MongoClient

describe 'MongoClient', ->

  db = undefined
    
  before (done)->
    MongoClient.connect 'mongodb://127.0.0.1:27017/test', (e, mongodb)->
      throw e if e
      db = mongodb
      db.dropDatabase ->
        do done
  
  after (done)->
    db.close(done)

  describe 'prepare test data', ->
    
    it 'should be...', (done)->
 
      collection = db.collection('orders')
     
      MAX = 300
      async.forEachSeries [1..MAX], (val, next)->
        daysAgo = (val - val%10)/10
        date = moment(new Date).subtract('day', daysAgo).toDate()
        collection.insert {ordered_at:date}, (e, docs)->
          do next
      ,
      (e, results)->
        collection.count (e, count)->
          assert.ok count is MAX
          do done
  
  describe 'aggregate', ->

    it 'should be...', (done)->
    
      db.collection('orders').aggregate
        $project:
          ordered_at: 1
          year:
            $year: "$ordered_at"
          month:
            $month: "$ordered_at"
          day:
            $dayOfMonth: "$ordered_at"
          daykey:
            $concat: [
              $substr: [{$year: "$ordered_at"}, 0, 4]
              '-'
              $substr: [{$month: "$ordered_at"}, 0, 2]
              '-'
              $substr: [{$dayOfMonth: "$ordered_at"}, 0, 2]
            ]
      ,
        $group:
          _id:
            year: "$year"
            month: "$month"
            day: "$day"
          ordered_at:
            $last: "$ordered_at"
          daykey:
            $last: "$daykey"
          count:
            $sum: 1
      ,
        $project:
          ordered_at: 1
          daykey: 1
          count: 1
      , (e, result)->
        console.log e, result
        do done
