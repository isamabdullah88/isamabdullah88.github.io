'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Quick container animations for a smooth page load
const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export default function Home() {
  return (
    <motion.div 
      className="space-y-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 1. HERO SECTION */}
      <motion.section variants={itemVariants} className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Isam Balghari</span>
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium">
          Computational Physicist & Software Engineer
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          I specialize in building machine learning models for atomic-scale simulations, high-performance computing (HPC) workflows, and scaling first-principles calculations. With a solid foundation of six years in professional software engineering coupled with an MS in Physics, I bridge the gap between rigorous theoretical modeling and robust, scalable software architecture.
        </p>
      </motion.section>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* 2. RESEARCH & PROJECTS PREVIEW */}
      <motion.section variants={itemVariants} className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured Projects
          </h2>
          <Link href="/projects" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
            View all projects →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Project 1: DSpinGNN */}
          <div className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              DSpinGNN
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
              An E(3)-equivariant Graph Neural Network combined with a Residual MLP built to predict exchange coupling parameters ($J$) in magnetic 2D materials. Successfully scaled DFT computations from 8 atoms to large-scale simulations containing 3,200 atoms.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">PyTorch</span>
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">e3nn</span>
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">DFT</span>
            </div>
          </div>

          {/* Project 2: Phystrackx */}
          <div className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Phystrackx
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
              An independent, proprietary scientific tracking suite designed and deployed for experimental laboratories. Streamlines video tracking, data acquisition, and real-time visualization of complex physical phenomena.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">Computer Vision</span>
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">Data Acquisition</span>
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">GUI</span>
            </div>
          </div>
        </div>
      </motion.section>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* 3. CORE PROFICIENCIES */}
      <motion.section variants={itemVariants} className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Technical Strengths
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 text-sm">
          <div className="space-y-2">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Physics & Materials</h4>
            <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>• Density Functional Theory (DFT)</li>
              <li>• Quantum ESPRESSO</li>
              <li>• Condensed Matter Physics</li>
              <li>• Spin-Lattice Dynamics</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Machine Learning</h4>
            <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>• Equivariant GNNs (e3nn)</li>
              <li>• Deep Learning (PyTorch)</li>
              <li>• Geometric Deep Learning</li>
              <li>• Weights & Biases (W&B)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Software Engineering</h4>
            <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>• High-Performance Computing (HPC/SLURM)</li>
              <li>• Docker Containers</li>
              <li>• System Architecture</li>
              <li>• Python / TypeScript / C++</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}