import pymongo
client = pymongo.MongoClient('mongodb://localhost:27017')

myDb = client['Students']
myDbCollection = myDb.studentsInformation
firstStudent = {
    "name":"Muhammad Aliyan Nadeem",
    "dob":"21/4/2004",
    "section":"A",
    "age":20}
myDbCollection.insert_one(firstStudent)