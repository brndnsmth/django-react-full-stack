# Django + React Full Stack Example

An example of using Django and React.

```
git clone https://github.com/brndnsmth/django-react-full-stack.git
cd django-react-full-stack
```

React Steps
```
cd frontend
npm install
npm run dev
```

Django Steps
```
cd backend
python3 -m venv .venv
source .venv/bin/activate
```

Once in virtual environment (.venv), run:

```
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```