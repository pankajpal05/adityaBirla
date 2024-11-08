
# Project Setup Guide

Follow these steps to set up and start the project.

## 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone <repo_url>
cd <repo_directory>
```

## 2. Install Dependencies

### Frontend
Navigate to the frontend folder and install dependencies:

```bash
cd frontend
npm install
```

### Backend
Navigate to the backend folder and install dependencies:

```bash
cd ../backend
npm install
```

## 3. Set Up Environment Variables

### Backend `.env` File
Create a `.env` file in the `backend` directory with the following configuration:

```dotenv
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=FHFEDeXeqN6tN1zhXAoEwg==,PhYgT1Bqmv1BVdV8mXodCA==,RQaIgW98qMFenBbh6MrmBA==,4RLYdCpdBK2I1/L6Y7hwYQ==
API_TOKEN_SALT=/9A8QnMp4dlFt7FLKx7cfg==
ADMIN_JWT_SECRET=g/pgtnWL9wHun8QZDJsNKA==
TRANSFER_TOKEN_SALT=HVPhhT0DfKOSFI8nMIqiMw==

# Database
DATABASE_CLIENT=sqlite
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=Te2i4UAHQMXe5ojUuG74ng==
```

### Frontend `.env` File
Create a `.env` file in the `frontend` directory with the following configuration:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:1337/api
NEXT_ASSET_URL=http://localhost:1337
NEXT_PUBLIC_ASSET_URL=http://localhost:1337
NEXT_API_URL=http://localhost:1337/api
```

## 4. Backend Database Configuration
Replace the `data.db` file in the backend `.tmp` folder with the file provided to you.

## 5. Start the Development Servers

### Backend
In the `backend` directory, run:

```bash
npm run develop
```

> **Note**: If you encounter the error `Middleware "strapi::session": App keys are required`, ensure that the `APP_KEYS` value is set in your `.env` file under the backend directory.

### Frontend
In the `frontend` directory, run:

```bash
npm run dev
```

## 6. Access Strapi Admin
To view the Strapi content, log in using the provided Strapi credentials.

---

After these steps, the project should be up and running.
