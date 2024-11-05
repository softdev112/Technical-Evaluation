# Full-Stack Item List Application

## Overview
This project demonstrates a basic full-stack application using Node.js/Express for the back-end and React with Material-UI for the front-end.

## Features
- **Back-End**: API with `GET` and `POST` endpoints for item management.
- **Front-End**: Displays items and includes a form for adding new items with validation.
- **Error Handling**: User-friendly error messages for failed actions.

## Setup Instructions

### Back-End (Node.js/Express)
1. Navigate to the back-end folder: `cd fullstack-eval`
2. Install dependencies: `npm install`
3. Run the server: `node index.js`

### Front-End (React)
1. Navigate to the front-end folder: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## API Endpoints
- `GET /items` - Retrieves all items.
- `POST /items` - Adds a new item (requires a `name` in the request body).

## Notes
- Ensure the back-end server runs on `http://localhost:5001`.
- The front-end fetches data from this back-end endpoint.
