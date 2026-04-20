const express = require('express');
const router = express.Router();

const testimonials = [
  {
    id: 1,
    name: 'Michael Thompson',
    role: 'CEO, Thompson Enterprises',
    content: 'BuildRight Construction delivered our office complex ahead of schedule and under budget. Their attention to detail and commitment to quality is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Property Developer',
    content: 'Working with this team was an absolute pleasure. They handled our residential development with professionalism and expertise that exceeded our expectations.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'
  },
  {
    id: 3,
    name: 'Robert Williams',
    role: 'Director, Metro Infrastructure',
    content: 'The bridge project was complex, but they navigated every challenge with innovative solutions. A truly reliable partner for large-scale infrastructure.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'
  },
  {
    id: 4,
    name: 'Amanda Foster',
    role: 'Hospital Administrator',
    content: 'They completed our medical center renovation with minimal disruption to our operations. The quality of work is exceptional and the staff loves the new facilities.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'
  }
];

router.get('/', (req, res) => {
  res.json(testimonials);
});

module.exports = router;
