const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  
  const projects = [
    { title: 'Project A', description: 'I made a profile with 4 pages that tells about me and projects' },
    { title: 'Project B', description: 'I made a code that takes grades for a student and stroes it in a document' }
  ];
  res.render('projects', { title: 'Projects', projects });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submitted:', { name, email, message });
  res.render('contact', { title: 'Contact Me', success: true });
});

module.exports = router;

