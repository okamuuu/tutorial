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
 
      product_ids = [1, 2, 2, 3, 3, 3].map (i)-> "product" + i

      ORDERS_COUNT = 300
      async.forEachSeries [1..ORDERS_COUNT], (val, next)->
        daysAgo = (val - val%10)/10
        date = moment(new Date).subtract('day', daysAgo).toDate()
        db.collection('orders').insert
          product_id: product_ids[val%product_ids.length]
          ordered_at: date
        , (e)->
          do next
      ,
      (e)->
        db.collection('orders').count (e, count)->
          assert.ok count is ORDERS_COUNT
          do done
  
  describe 'aggregate', ->

    it 'should be...', (done)->
    
      db.collection('orders').aggregate
        $project:
          product_id: 1
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
            product_id: "$product_id"
          ordered_at:
            $last: "$ordered_at"
          daykey:
            $last: "$daykey"
          count:
            $sum: 1
      ,
        $sort:
          daykey: -1
          count: -1
      , (e, results)->
        #for r in results
        #  console.log moment(r.ordered_at).format('YYYY-MM-DD') + ', ' + r._id.product_id + ', ' + r.count
          
        lastDay = undefined
        for r in results
          if lastDay is undefined or lastDay.daykey isnt r.daykey
            lastDay = r
          else
            console.log r.daykey + ', ' + r._id.product_id  + ', ' + r.count
            assert.ok lastDay.count >= r.count
            lastDay = r
        do done
