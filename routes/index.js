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
    { title: 'Project A', description: 'Short description', link: '#' },
    { title: 'Project B', description: 'Short description', link: '#' }
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

