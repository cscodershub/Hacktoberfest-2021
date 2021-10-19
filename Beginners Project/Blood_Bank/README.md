# Bloodbank website

## Introduction

A django project to register a blood donor and display the donors list. You can register and login new user to website and then add the donor. The added donors will be visible in the display page as a table.

<a href='https://bloodbankpro.herokuapp.com/'>Live Website </a>

### Prerequisites
Make sure you have installed postgreql in your device and a database is setup. 
To install postgresql and pgadmin4 watch <a href="https://www.youtube.com/watch?v=d--mEqEUybA">Prerequisites</a>

## Getting the Application Running

1. Clone the repository and open `register` folder in vscode.
2. To make this project running at first you should create a virtual environment by typing the following in the command prompt:
```sh 
mkvirtualenv virtualenv_name 
```

3. Check whether you are in the virtual environment, if not type the following in command prompt to enter virtual environment:
```sh
workon virtualenv_name
```

4. Once in virtual environment, check the working directory and confirm you are in the `register` folder
5. Then type the following in command prompt:
```sh
pip install -r requirements
``` 
6. Confirm the installations and then type the following to migrate the data:
```sh
python manage.py migrate
```
6. Confirm the migration is error free, and then type the following in command prompt and follow the instructions in terminal to create a superuser:
```sh 
python manage.py createsuperuser
``` 
7. Now type the following to start the website server in localhost:
```sh
python manage.py runserver
```
8. Now type the following in your browser to access the website:
```sh
localhost:8000
```
<!-- CONTACT -->
## Contact

Fahad P N - <a href='https://www.linkedin.com/in/fahad-p-n-93a7441b4/'>LinkedIn</a>

Project Link:<a href='https://github.com/FAHADPN/Blood_bank'> Blood_bank</a>

