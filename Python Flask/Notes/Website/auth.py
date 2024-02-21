import re
from . import create_app
from flask import Blueprint, render_template, request, flash,redirect,url_for
from werkzeug.security import generate_password_hash,check_password_hash
from flask_login import login_user,login_required



auth = Blueprint('auth',__name__)

@auth.route('/login',methods=['GET','POST'])
def login():
 if request.method == 'POST':
        from .models import User
        app,mongo = create_app()
        data = request.form
        email = data['email']
        password = data['password']
        user = mongo.db.users.find_one({'email': email})
        if user:
            if check_password_hash(user['password'], password):
                user_data = User(user['_id'], user['name'], user['email'], user['password'], user['timeStamps'])
                login_user(user_data, remember=True)
                return redirect(url_for('view.home'))  
            else:
                flash('Incorrect password', category='error')
        else:
            flash('No account with this email found. Please signup to continue', category='error')
 return render_template('login.html')

@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    from .models import UserSignIn    
    if request.method == 'POST':
        app,mongo = create_app()
        data = request.form
        name = data['name']
        email = data['email']
        password = data['password']
        confirm_password = data['confirm_password']
        user_existing = mongo.db.users.find_one({'email': email})
        pattern = r"^\w+([\.-]?\w+)*@gmail.com$"
        if len(name) < 2:
            flash("Enter a valid username", category='error')
        elif not re.match(pattern, email):
            flash("Enter a valid email. For example abc@gmail.com", category='error')
        elif user_existing:
             flash("User with the email already exist. Please login to continue", category='error')
        elif len(password) < 8:
            flash("The password must be a minimum of 8 characters", category='error')
        elif password != confirm_password:
            flash("Passwords do not match", category='error')
        else:
            user = UserSignIn(name=name, email=email, password=generate_password_hash(password))
            try:
                user.save()
                flash("Account has been created successfully", category='success') 
                return redirect(url_for('view.home'))
            except Exception as e:
                flash("Error occurred while creating the account", category='error')
                print(e)

    return render_template('signup.html')
@auth.route('/logout')
@login_required
def logout():
   return render_template('login.html')