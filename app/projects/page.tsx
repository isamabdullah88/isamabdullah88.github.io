'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'DSpinGNN',
    description: 'An E(3)-equivariant Graph Neural Network combined with a Residual MLP architecture designed to predict magnetic exchange coupling parameters ($J$) in materials like $\\text{CrI}_3$. Successfully scales first-principles calculations from 8 atoms to large-scale simulations containing 3,200 atoms.',
    tags: ['PyTorch', 'e3nn', 'DFT', 'Quantum ESPRESSO', 'HPC'],
    links: { github: 'https://github.com' }
  },
  {
    title: 'Phystrackx',
    description: 'An independent, proprietary scientific tracking suite engineered for experimental physical laboratories. Streamlines sub-millisecond video tracking, real-time trajectory visualization, and high-frequency data acquisition.',
    tags: ['Computer Vision', 'Data Acquisition', 'GUI Design', 'C++ / Python'],
    links: { github: 'https://github.com' }
  },
  {
    title: 'NequIP (From Scratch)',
    description: 'A clean, modular reproduction of NequIP (E(3)-equivariant neural network for interatomic potentials) developed completely from scratch using PyTorch and the e3nn library. Built to deeply understand equivariant linear layers ($o3.\\text{Linear}$) and tensor products.',
    tags: ['PyTorch', 'e3nn', 'Equivariant ML'],
    links: { github: 'https://github.com' }
  },
  {
    title: 'Non-linear Balloon Dynamics',
    description: 'An independent research project simulating the non-linear hyperelastic dynamics of two interconnected rubber balloons. Modeled physical relaxation oscillations to design heart-like pneumatic devices.',
    tags: ['Mathematical Modeling', 'Scientific Computing', 'Python'],
    links: { github: 'https://github.com' }
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">Projects & Research</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          A collection of research models, scientific tools, and code implementations.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{project.title}</h2>
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline"
                >
                  [GitHub]
                </a>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}