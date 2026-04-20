import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, DollarSign, ExternalLink, X } from 'lucide-react';
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Static data for Vercel deployment
      const response = { data: [
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
          image: 'https://images.unsplash.com/photo-1541888940406-c627a92ad1ab?w=800',
          completionDate: '2023-11-20',
          budget: '$85M',
          status: 'Completed'
        },
        {
          id: 3,
          title: 'Green Valley Residential',
          description: 'Eco-friendly residential community with 200+ units and sustainable features.',
          category: 'Residential',
          image: 'https://images.unsplash.com/photo-1600596542815-c627a92ad1ab?w=800',
          completionDate: '2024-06-10',
          budget: '$45M',
          status: 'In Progress'
        },
        {
          id: 4,
          title: 'Industrial Park Phase II',
          description: 'Expansion of manufacturing facilities with state-of-the-art infrastructure.',
          category: 'Industrial',
          image: 'https://images.unsplash.com/photo-1581094794320-c627a92ad1ab?w=800',
          completionDate: '2024-08-15',
          budget: '$60M',
          status: 'In Progress'
        },
        {
          id: 5,
          title: 'Harbor Waterfront Development',
          description: 'Mixed-use waterfront project featuring retail, dining, and entertainment.',
          category: 'Mixed Use',
          image: 'https://images.unsplash.com/photo-1545324418406-c627a92ad1ab?w=800',
          completionDate: '2024-12-01',
          budget: '$95M',
          status: 'In Progress'
        },
        {
          id: 6,
          title: 'Medical Center Renovation',
          description: 'Complete modernization of a 500-bed medical facility with new equipment.',
          category: 'Healthcare',
          image: 'https://images.unsplash.com/photo-1587351021759-c627a92ad1ab?w=800',
          completionDate: '2023-09-30',
          budget: '$38M',
          status: 'Completed'
        }
      ]}
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([
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
      ]);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-500/20 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our portfolio of landmark projects that showcase our commitment 
            to excellence and innovation in construction.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500" />
          </div>
        ) : (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-effect rounded-2xl overflow-hidden hover-lift group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent" />
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/80 text-white' 
                        : 'bg-primary-500/80 text-white'
                    }`}>
                      {project.status}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-primary-400 text-sm font-medium">{project.category}</span>
                      <h3 className="text-white font-bold text-lg mt-1">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300 flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-primary-500" />
                        {project.completionDate}
                      </span>
                      <span className="text-gray-300 flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-primary-500" />
                        {project.budget}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-effect rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-primary-400 font-medium">{selectedProject.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <Calendar className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Completion</div>
                    <div className="font-semibold text-white">{selectedProject.completionDate}</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <DollarSign className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Budget</div>
                    <div className="font-semibold text-white">{selectedProject.budget}</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <MapPin className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Status</div>
                    <div className="font-semibold text-white">{selectedProject.status}</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
