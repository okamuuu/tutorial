import org.specs2.mutable._
import com.mongodb.casbah.Imports._

class CasbahSpec extends Specification {

  "The 'Hello world' string" should {
 
    val mongoClient = MongoClient("localhost", 27017)
    val db = mongoClient("casbah_test")
    val collectionNames = db.collectionNames

    System.err.println(db.collectionNames)

    val coll = db("test_coll")
    coll.drop()

    val a = MongoDBObject("hello" -> "world")
    val b = MongoDBObject("language" -> "scala")

    coll.insert( a )
    coll.insert( b )
    
    System.err.println(db.collectionNames)
    System.err.println(coll.count())

    val allDocs = coll.find()
    println( allDocs )
    for(doc <- allDocs) println( doc )

    val hello = MongoDBObject("hello" -> "world")
    val helloWorld = coll.findOne( hello )

    println(helloWorld)
   
    var query = MongoDBObject("language" -> "scala")
    var update = MongoDBObject("platform" -> "JVM")
    var result = coll.update( query, update )

    println("Number updated: " + result.getN)
    for (c <- coll.find) println(c)

    query = MongoDBObject("language" -> "clojure")
    result = coll.remove( query )

    println("Number removed: " + result.getN)
    for (c <- coll.find) println(c)

    query = MongoDBObject()
    result = coll.remove( query )

    println( "Number removed: " + result.getN )
    println( coll.count() )

    "contain 11 characters" in {
      "Hello World" must have size(11)

    }   

    "start with 'Hello'" in {
      "Hello World" must startWith("Hello")
    }   
    
    "end with 'world'" in {
      "Hello world" must endWith("world")
    }   
  }
}
