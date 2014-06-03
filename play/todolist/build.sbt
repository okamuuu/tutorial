name := "todolist"

version := "1.0-SNAPSHOT"


libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache
)     

libraryDependencies += "org.mongodb" %% "casbah" % "2.7.2"

play.Project.playScalaSettings
