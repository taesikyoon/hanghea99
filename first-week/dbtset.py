from pymongo import MongoClient
import bcrypt


client = MongoClient(
    'mongodb+srv://taesikyoon97:louis17467@cluster0.ncjxm.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta
db_id = list(db.comments.find({}, {'_id': False}))
print(db_id)
# from datetime import datetime, timedelta
# now=datetime.utcnow()
# test=timedelta(minutes=3)
# sum=datetime.utcnow()+timedelta(minutes=3)
# print(now)
# print(test)
# print(sum)

