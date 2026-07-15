'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Calendar, GraduationCap, Briefcase, Award, Library } from 'lucide-react';

export default function CVPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10 max-w-3xl mx-auto"
    >
      {/* HEADER & DOWNLOAD */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">Curriculum Vitae</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Last updated: July 2026</p>
        </div>
        <a
          href="/Isam-Balghari-CV.pdf"
          download="Isam-Balghari-CV.pdf"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 rounded-lg transition-all shadow-sm self-start sm:self-center"
        >
          <FileDown className="w-4 h-4" />
          Download CV (PDF)
        </a>
      </div>

      {/* EDUCATION */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-blue-500" />
          Education
        </h2>
        <div className="space-y-6">
          <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="absolute w-3 h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full -left-[7px] top-1.5" />
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50">MS in Physics</h3>
              <span className="text-zinc-500 dark:text-zinc-400 font-mono">Sept 2023 – July 2026</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-semibold">Lahore University of Management Sciences (LUMS)</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              <strong>Thesis:</strong> DSpinGNN: A Physics-Informed Equivariant Graph Neural Network for Dynamic Magnetic Exchange Prediction in Strain-Deformed Monolayer $CrI_3$
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="absolute w-3 h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full -left-[7px] top-1.5" />
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50">BS in Computer Science</h3>
              <span className="text-zinc-500 dark:text-zinc-400 font-mono">Sept 2013 – June 2017</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-semibold">Lahore University of Management Sciences (LUMS)</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              <strong>Capstone:</strong> Visual Inertial Odometry via Multi-State Constraint Extended Kalman Filter (MSCKF)
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH & PROFESSIONAL SKILLS */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-500" />
          Technical Expertise
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 text-sm">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/10 space-y-2">
            <h4 className="font-bold text-zinc-900 dark:text-zinc-50">AI for Science</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              PyTorch, e3nn, NequIP, Geometric Deep Learning, Equivariant Convolutions, Tensor Products
            </p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/10 space-y-2">
            <h4 className="font-bold text-zinc-900 dark:text-zinc-50">Computational Physics</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              DFT+U, Quantum ESPRESSO, Wannier90, TB2J, SLURM HPC, ASE, OVITO, FIRE Relaxation
            </p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/10 space-y-2">
            <h4 className="font-bold text-zinc-900 dark:text-zinc-50">Software Engineering</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Python, C/C++, Linux Systems, Pipeline Architecture, Compute Optimization, Git
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-500" />
          Professional Experience
        </h2>
        <div className="space-y-6">
          <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="absolute w-3 h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full -left-[7px] top-1.5" />
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50">Senior Software Engineer</h3>
              <span className="text-zinc-500 dark:text-zinc-400 font-mono">Feb 2021 – Feb 2025</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-semibold">Roll Camera Inc (Remote)</p>
            <ul className="text-sm text-zinc-500 dark:text-zinc-400 space-y-1 list-disc pl-4">
              <li>Overhauled deep learning inference engine, optimizing compute runtime by 60x.</li>
              <li>Designed and deployed an end-to-end AI-driven 3D visual effects pipeline.</li>
            </ul>
          </div>

          <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="absolute w-3 h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full -left-[7px] top-1.5" />
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50">Software Engineer</h3>
              <span className="text-zinc-500 dark:text-zinc-400 font-mono">Aug 2017 – Dec 2018</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-semibold">Hazen.ai (Pakistan)</p>
            <ul className="text-sm text-zinc-500 dark:text-zinc-400 space-y-1 list-disc pl-4">
              <li>Implemented non-linear Kalman filters for high-precision object kinematics modeling.</li>
              <li>Led development of a 3D vehicle detection framework designed for heavily occluded environments.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HONORS & SCHOLARSHIPS */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
          <Library className="w-5 h-5 text-blue-500" />
          Honors & Awards
        </h2>
        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li className="flex justify-between">
            <span><strong>Dean's Honour Roll</strong> (LUMS MS Physics)</span>
            <span className="font-mono text-xs text-zinc-500">2026</span>
          </li>
          <li className="flex justify-between">
            <span><strong>Departmental Merit Scholarship</strong> (LUMS MS Physics)</span>
            <span className="font-mono text-xs text-zinc-500">2024 – 2025</span>
          </li>
        </ul>
      </section>
    </motion.div>
  );
}