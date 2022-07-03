from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
client = MongoClient('mongodb+srv://taesikyoon97:louis17467@cluster0.ncjxm.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta



all_users = list(db.todo.find({},{'_id':False}))
print(all_users)
print(len(all_users))
    