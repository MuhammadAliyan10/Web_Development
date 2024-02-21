from flask import Flask
from flask_login import LoginManager
from flask_pymongo import PyMongo
from bson import ObjectId



def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "asdasdasdasda"
    app.config['MONGO_URI'] = 'mongodb://localhost:27017/Notes' 
    mongo = PyMongo(app)

    from .view import view
    from .auth import auth

    login_manager = LoginManager()
    login_manager.login_view = "auth.login"
    login_manager.init_app(app)
    @login_manager.user_loader
    def load_user(user_id):
        user_data = mongo.db.users.find_one({'_id': ObjectId(user_id)})
        if user_data:
            from .models import User
            user = User(user_data['_id'], user_data['name'], user_data['email'], user_data['password'], user_data['timeStamps'])
            return user
        return None
        
    app.register_blueprint(view,url_prefix='/')
    app.register_blueprint(auth,url_prefix='/')
        
    return app,mongo
