from flask import Flask, render_template, request, jsonify, redirect, url_for,make_response
from pymongo import MongoClient
import bcrypt

from datetime import datetime, timedelta
import jwt

app = Flask(__name__)

client = MongoClient(
    'mongodb+srv://taesikyoon97:louis17467@cluster0.ncjxm.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

SECRET_KEY= "simple"

# 초기 / 인덱스 완
@app.route("/" ,methods=["POST","GET"])
def index():
    return render_template('index.html')

# def index():



# main 페이지 완
@app.route('/main',methods=['POST','GET'])
def main():
    token_receive = request.cookies.get('token')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])

        user = db.users.find_one({"email": payload["id"]})
        musical_list = list(db.musicals.find({}, {'_id': False}).limit(28))
        return render_template("main.html", musicals=musical_list, username=payload['id'])
    except jwt.ExpiredSignatureError:
        return redirect(url_for("index", msg="로그인 시간이 만료되었습니다."))
    except jwt.exceptions.DecodeError:
        return redirect(url_for("index", msg="로그인 정보가 존재하지 않습니다."))




# 회원가입 페이지 완
@app.route("/join")
def join():
    return render_template("join.html")

# 회원가입 완
@app.route("/auth/join", methods=["POST"])
def sign_up():
    user_id = request.form["email"]
    user = db.users.find_one({'eamil': user_id})
    if user is not None:
        return redirect(url_for("join"))
    user_pw = request.form["password"]
    encrypted_password = bcrypt.hashpw(user_pw.encode("utf-8"), bcrypt.gensalt())
    db.users.insert_one({"email": user_id, "password": encrypted_password})
    return redirect("/")
# 로그인 완
@app.route("/auth/login", methods=["POST"])
def login():
    data_user = request.get_json()  # 데이터 전달 받기 - json 타입으로 받음

    db_user = db.users.find_one({'email': data_user['email']})

    if db_user == None:
        print("디비에 아이디가 일치하지않아요")
        return jsonify({"message": "아이디를 제대로 입력해주세요."})
    check_pw = bcrypt.checkpw(data_user['password'].encode("utf-8"), db_user['password'])
    if check_pw == False:
        print("디비에 비번이 일치하지않아요")
        return jsonify({"message": "비밀번호를 제대로 입력해주세요."})

    # 토큰 생성
    else:

        payload = {
            'id': db_user['email'],
            # 'exp': datetime.utcnow() + timedelta(minutes=3)  # 로그인 3분 유지

        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')


        return jsonify({'result': 'success', 'token': token})







# 로그아웃 가져와서 씀  - 완료
@app.route("/auth/logout", methods = ["get"])
def authLogout():
  resp = make_response(redirect("/"))
  resp.delete_cookie("token")
  return resp

@app.route('/api/posting', methods=['POST'])
def posting():
    if request.form['sg'] == "0":
        # 클라이언트에서 token받기
        token = request.cookies.get("token")
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            user = db.users.find_one({"email": payload["id"]})
            comment_receive = request.form["comment_give"]
            musical_title_give = request.form['musical_title_give']

            doc = {
                "username": user["email"],
                "comment": comment_receive,
                'title': musical_title_give
            }
            db.comments.insert_one(doc)
            return jsonify({"result":"success", 'msg':'등록완료'})
        except(jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
            return redirect("/?error=토큰 없음")
    else:
        token = request.cookies.get("token")

        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            musical_title_give = request.form['musical_title_give']
            username = db.comments.find_one({"username": payload["id"]})['username']
            title = db.comments.find_one({"title": musical_title_give})['username']
            _id = db.comments.find_one({"title": musical_title_give})['_id']
            if username == title :
                db.comments.delete_one({'_id': _id})
            return jsonify({"msg":"댓글이 삭제 되었습니다."})
        except(jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
            return redirect("/?error=토큰 없음")



@app.route('/detail/<title>')
def detail_title(title):

    token = request.cookies.get("token")
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        email = db.users.find_one({"email": payload["id"]})['email']
        # 여기 왜 그냥 db.comments.find({'title':title},{'_id':False}) 이거 왜 NONE 나오는거지 ??? 다른데도 왜 논임??
        comments = list(db.comments.find({'title':title+' '}))
        musical = db.musicals.find_one({'title':title+' '}, {'_id': False})
        detail_list = db.musical_detail.find_one({'title':title+''}, {'_id': False})


        # musical = db.musical_main.find_one({"img":img},)
        return render_template('detail.html',comments=comments, email=email, musical=musical, listde=detail_list)

    except(jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect("/?error=토큰 없음")


# 뷰에서 권고하는 HTTP 통신 라이브러리는 액시오스 입니다. Promise 기반의 HTTP 통신 라이브러리이며
# 상대적으로 다른 통신 HTTP 통신 라이브러리들에 비해 문서화가 잘되어 있고 API가 다양합니다.
@app.route("/auth/check",methods=["POST"])
def check():
    data=request.get_json()
    db_id = db.users.find_one({'email': data['email']})
    if db_id is None:
        print("사용 가능해요")
        return jsonify({"result":"success"})
    else:
        print("사용 불가해요")
        return jsonify({"result": "exist"})


    #회원가입을 누르면 바로 가입이 되어버림..중복된 아이디여도

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)

# 서버를 따로 쓴다 db에 저장하고 스케쥴을 잡아서 3시간 간격으로 실행되도록 하던