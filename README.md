# Django + React Full Stack Example

This is a very basic web application that uses Django as the backend and React as the frontend. The project demonstrates how to integrate these two frameworks and create a full-stack web application with features such as CRUD operations and RESTful API.

## Prerequisites

To run this project, you need to have the following installed on your system:

- Python >= 3.10
- Node.js >= 18.19

## Installation

To install this project, follow these steps:

1. Clone the repository from GitHub using the following command:

```
git clone https://github.com/brndnsmth/django-react-full-stack.git
```

2. Navigate to the project directory:

```
cd django-react-full-stack
```

3. Install the frontend dependencies using npm:

```
cd frontend
npm install
```

4. Create .env for environment variables:

```
touch .env
```

5. Add the following to the .env and save the file:

```
VITE_API_URL=http://127.0.0.1:8000/api/
```

6. Run the frontend development server using npm:

```
npm run dev
```

7. Open a new terminal and navigate to the backend directory:

```
cd backend
```

8. Create a virtual environment using Python 3:

```
python3 -m venv .venv
```

9. Activate the virtual environment:

```
source .venv/bin/activate
```

10. Once in virtual environment (.venv), install the backend dependencies using pip:

```
pip install -r requirements.txt
```

11. Apply the database migrations using Django:

```
python manage.py migrate
```

12. Create admin account:

```
python manage.py createsuperuser
```

13. Run the backend development server using Django:

```
python manage.py runserver
```

## Usage

Once you create a superuser, access http://127.0.0.1:8000/admin/ to log in and add posts. You should now be able to view posts at http://localhost:5174/.
