from flask import Blueprint,render_template,request,flash
from datetime import datetime
from flask_login import current_user,login_required



current_date = datetime.now().strftime('%d/%m/%Y')

view = Blueprint('view',__name__)

@view.route('/')
@login_required
def home():
    return render_template('home.html', date = current_date, user= current_user)

@view.route('/notes', methods=['GET', 'POST'])
def notes():
    from . import create_app
    from .models import Note
    app, mongo = create_app()
    if request.method == "POST":
        data = request.form
        title = data['title']
        type = data['type']
        description = data['description']
        if len(title) < 2:
            flash("Please enter a valid title", category='error')
        elif len(description) < 10:
            flash("Description must be at least 10 characters", category='error')
        else:
            user = mongo.db.users.find_one({'email': current_user.email})
            note = Note(user_id=user['_id'], title=title, type=type, description=description)
            try:
                note.save()
                flash("Your note was added successfully", category='success')
            except Exception as e:
                flash("An error occurred while creating the note", category='error')
                print(e)
    user = mongo.db.users.find_one({'email': current_user.email})
    user_notes = Note.find_notes_by_user_id(user['_id'])
    return render_template('notes.html', date=current_date, user=current_user, notes=user_notes)
