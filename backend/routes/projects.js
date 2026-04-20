const express = require('express');
const router = express.Router();

const projects = [
  {
    id: 1,
    title: 'Skyline Tower Complex',
    description: 'A modern 45-story commercial and residential complex in the heart of downtown.',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    completionDate: '2024-03-15',
    budget: '$120M',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Metro Bridge Extension',
    description: 'Major infrastructure project connecting the eastern and western districts.',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    completionDate: '2023-11-20',
    budget: '$85M',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Green Valley Residential',
    description: 'Eco-friendly residential community with 200+ units and sustainable features.',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    completionDate: '2024-06-10',
    budget: '$45M',
    status: 'In Progress'
  },
  {
    id: 4,
    title: 'Industrial Park Phase II',
    description: 'Expansion of manufacturing facilities with state-of-the-art infrastructure.',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
    completionDate: '2024-08-15',
    budget: '$60M',
    status: 'In Progress'
  },
  {
    id: 5,
    title: 'Harbor Waterfront Development',
    description: 'Mixed-use waterfront project featuring retail, dining, and entertainment.',
    category: 'Mixed Use',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    completionDate: '2024-12-01',
    budget: '$95M',
    status: 'In Progress'
  },
  {
    id: 6,
    title: 'Medical Center Renovation',
    description: 'Complete modernization of a 500-bed medical facility with new equipment.',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800',
    completionDate: '2023-09-30',
    budget: '$38M',
    status: 'Completed'
  }
];

router.get('/', (req, res) => {
  res.json(projects);
});

router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

module.exports = router;
