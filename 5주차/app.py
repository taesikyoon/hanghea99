from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
client = MongoClient('mongodb+srv://taesikyoon97:louis17467@cluster0.ncjxm.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/bucket/done", methods=["POST"])
def bucket_post():
    sample_receive = request.form['sample_give']
    done = (request.form['done'])
    
    if done == "0": 
        db.todo.update_one({'num':int(sample_receive)},{'$set':{'done':1}})
        print(db.tode.find_one({'num':int(sample_receive)}))
        return jsonify({'msg':'완료!'})
    else :
        db.todo.update_one({'num':int(sample_receive)},{'$set':{'done':0}})
        print("done 0")
        return jsonify({'msg':'취소!'})
    
    

@app.route("/bucket", methods=["POST"])
def bucket_done():
    sample_receive = request.form['sameple_give']

    all_users = list(db.todo.find({},{'_id':False}))
    num = len(all_users) +1
    
    doc = {
        "num" : num,
        "do" : sample_receive,
        "done": 0
    }
    db.todo.insert_one(doc)
    print(sample_receive)
    return jsonify({'msg':'POST(기록) 연결 완료!' })
    

@app.route("/bucket", methods=["GET"])
def bucket_get():
    all_users = list(db.todo.find({},{'_id':False}))
    print(all_users)
    return jsonify({'msg': all_users})   

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)