from . import create_app
app,mongo = create_app()
from flask_login import UserMixin
from datetime import datetime

current_date = datetime.now().strftime('%d/%m/%Y')



class User(UserMixin): 
    def __init__(self,_id, name, email,password,timeStamps):
        self._id = _id
        self.name = name
        self.email = email
        self.password = password
        self.timeStamps = timeStamps
        self.created_at = datetime.utcnow()

    def save(self):
        mongo.db.users.insert_one({
            'name': self.name,
            'email': self.email,
            'password': self.password,
            'timeStamps': self.created_at
        })
        
class UserSignIn(UserMixin): 
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password
        self.created_at = datetime.utcnow()

    def save(self):
        mongo.db.users.insert_one({
            'name': self.name,
            'email': self.email,
            'password': self.password,
            'timeStamps': self.created_at
        })

class Note(UserMixin):
    def __init__(self, user_id, title,type, description):  
        self.user_id = user_id  
        self.title = title
        self.type = type
        self.description = description
        self.created_at =current_date

    def save(self):
        mongo.db.notes.insert_one({
            'user_id': self.user_id,
            'title': self.title,
            'type': self.type,
            'description': self.description,
            'timeStamps': self.created_at
        })
    @staticmethod
    def find_notes_by_user_id(user_id):
        notes = mongo.db.notes.find({'user_id': user_id})
        return notes
