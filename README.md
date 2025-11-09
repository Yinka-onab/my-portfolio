# Assignment 2
# Assignment GitHub repo Website : https://github.com/Yinka-onab/my-portfolio
# My Life Demo : 

About:
A personal portfolio built with **Node.js**, **Express**, and **EJS**, showcasing my web development skills, projects, and contact information. Designed with **Bootstrap** for responsive layout and deployed on **Render**.

## Technologies Used
- **Node.js**&**Express** – Server-side framework
- **EJS** – Templating engine for dynamic views
- **Bootstrap 5** – Responsive design and styling
- **Font Awesome** – Icons
- **Render** – Cloud deployment platform

## Features
- **Home Page** – Intro and link to projects
- **About Page** – Personal bio and interests
- **Projects Page** – Dynamic list of projects with title, description, and links
- **Contact Page** – Contact form and email link
- **Error Handling** – Custom 404 and server error pages
- **Responsive Design** – Mobile-friendly layout

## Folder Structure
my-portfolio/
├── public/
│   └── stylesheets/
│       └── style.css
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── about.ejs
│   ├── projects.ejs
│   ├── contact.ejs
│   └── error.ejs
├── routes/
│   └── index.js
├── app.js
├── package.json
└── bin/
    └── www
```
## Installation & Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/Yinka-onab/my-portfolio.git
   cd my-portfolio

2. Install dependencies:
   ```bash
   npm install

3. Run locally:
   bash
   npm start

4. Visit: `http://localhost:3000`

## Deployment
Deployed on [Render](https://render.com) using:
- **Build command**: `npm install`
- **Start command**: `npm start`

