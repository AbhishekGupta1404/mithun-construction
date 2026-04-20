const express = require('express');
const router = express.Router();

const services = [
  {
    id: 1,
    title: 'Commercial Construction',
    description: 'Full-service commercial building construction from office complexes to retail centers.',
    icon: 'building',
    features: ['Design-Build Services', 'Project Management', 'Commercial Renovation', 'Tenant Improvements']
  },
  {
    id: 2,
    title: 'Residential Projects',
    description: 'Custom homes, multi-family housing, and residential developments built to perfection.',
    icon: 'home',
    features: ['Custom Home Building', 'Multi-Family Housing', 'Luxury Estates', 'Renovations']
  },
  {
    id: 3,
    title: 'Industrial Construction',
    description: 'Specialized industrial facilities including warehouses, factories, and distribution centers.',
    icon: 'factory',
    features: ['Warehouses', 'Manufacturing Plants', 'Distribution Centers', 'Cold Storage']
  },
  {
    id: 4,
    title: 'Infrastructure',
    description: 'Large-scale infrastructure projects including bridges, roads, and public works.',
    icon: 'road',
    features: ['Bridges & Highways', 'Public Works', 'Utilities', 'Transportation']
  },
  {
    id: 5,
    title: 'Renovation & Restoration',
    description: 'Transform existing structures with our expert renovation and restoration services.',
    icon: 'tools',
    features: ['Historic Restoration', 'Building Modernization', 'Structural Repairs', 'Interior Renovation']
  },
  {
    id: 6,
    title: 'Project Management',
    description: 'Expert project management ensuring on-time, on-budget delivery with quality results.',
    icon: 'clipboard',
    features: ['Planning & Scheduling', 'Cost Management', 'Quality Control', 'Safety Compliance']
  }
];

router.get('/', (req, res) => {
  res.json(services);
});

router.get('/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }
  res.json(service);
});

module.exports = router;
