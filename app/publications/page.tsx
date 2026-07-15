'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Publication {
  title: string;
  authors: string[];
  journalOrStatus: string;
  year: string;
  abstract: string;
  links: {
    pdf?: string;
    arxiv?: string;
    code?: string;
  };
}

const publicationsList: Publication[] = [
  {
    title: 'DSpinGNN: A Physics-Informed Equivariant Graph Neural Network for Dynamic Magnetic Exchange Prediction in Strain-Deformed Monolayer CrI3',
    authors: ['Isam Balghari', 'Muhammad Faryad', 'Sabieh Anwar'],
    journalOrStatus: 'Preprint',
    year: '2026',
    abstract: 'Resolving the instantaneous, position-dependent isotropic magnetic exchange coupling Jij across a dynamically deforming crystal lattice requires a computational approach that simultaneously handles structural forces and magnetic interactions at length scales inaccessible to first-principles methods. Here we introduce DSpinGNN, a bifurcated machine-learning architecture comprising an E(3)-equivariant graph neural network (E-GNN) for classical Langevin structural dynamics and a physics-informed Δ-MLP that maps instantaneous local Cr-I-Cr bond geometry to isotropic exchange couplings, with the Goodenough-Kanamori superexchange relationship embedded as an analytical inductive bias. Trained on 345 DFT+U configurations of monolayer CrI3 and evaluated on a strictly withheld 61-configuration test set, DSpinGNN simultaneously achieves an energy MAE of 1.1 meV/atom, a force MAE of 6.5 meV/Å, and an exchange coupling MAE of 0.18 meV (R2=0.91). Deployed at 400× scale in a 3,200-atom supercell under a collinear Ising-constrained adiabatic approximation at 5 K, the model maps the local exchange response to a propagating biaxial strain wave. Wave reflection at periodic boundaries generates transient constructive interference regions where local compressive strain exceeds the DFT-established FM-to-AFM threshold, producing spatially heterogeneous exchange coupling textures that damp as the wave dissipates. Quantitative analysis yields a domain wall width of ξ=1.7±0.3~nm and a constructive-interference oscillation period of τ=0.27~ps -- mesoscopic observables inaccessible to direct DFT and constituting testable predictions for cryogenic magnetic force microscopy. DSpinGNN provides a reproducible, transferable framework for mesoscale exchange mapping in strain-driven 2D magnetic materials.',
    links: {
      arxiv: 'https://arxiv.org/abs/2606.11685',
      code: 'https://github.com/isamabdullah88/DSpinGNN'
    }
  },
  {
    title: 'PhysTrackX : An Open-Source Framework for Automated Tracking and Sensor Synchronization',
    authors: ['Isam Balghari', 'Sabieh Anwar'],
    journalOrStatus: 'Ready for Submission',
    year: '2026',
    abstract: 'Video analysis software is a staple of the modern undergraduate physics laboratory, enabling students to extract quantitative kinematic data from real-world phenomena. However, legacy applications often feature steep learning curves and lack integration with external digital instrumentation. In this paper, we introduce PhysTrackX, a modern, open-source video analysis framework designed to minimize cognitive load and maximize pedagogical value. Built with a streamlined graphical interface, PhysTrackX features a comprehensive suite of foundational utilities—including video trimming, spatial calibration, and coordinate system definition—and replaces tedious manual data collection with robust, automated optical flow tracking. Furthermore, it introduces novel features to the instructional laboratory, including an integrated Optical Character Recognition (OCR) module for synchronizing kinematic motion with external digital sensor displays, an interactive Geometry Plugin for in-situ spatial measurements, and an automated data plotting suite. We detail the software’s architecture, demonstrate its eﬃcacy through classical mechanics case studies, and provide pre-compiled executables to ensure immediate accessibility for physics educators.',
    links: {
      arxiv: '#',
      code: 'https://github.com/isamabdullah88/phystrackx'
    }
  }
];

export default function PublicationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">Publications & Preprints</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Academic manuscripts, preprints, and research projects.
        </p>
      </div>

      <div className="space-y-8">
        {publicationsList.map((pub, idx) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors space-y-4"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded">
                {pub.journalOrStatus} • {pub.year}
              </span>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 pt-1">
                {pub.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {pub.authors.map((author, i) => (
                  <span key={author}>
                    <span className={author === 'Isam Balghari' ? 'font-bold underline' : ''}>
                      {author}
                    </span>
                    {i < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed italic">
              {pub.abstract}
            </p>

            <div className="flex gap-4 text-xs font-mono font-bold">
              {pub.links.pdf && (
                <a href={pub.links.pdf} className="text-blue-600 dark:text-blue-400 hover:underline">
                  [PDF]
                </a>
              )}
              {pub.links.arxiv && (
                <a href={pub.links.arxiv} className="text-blue-600 dark:text-blue-400 hover:underline">
                  [arXiv]
                </a>
              )}
              {pub.links.code && (
                <a href={pub.links.code} className="text-blue-600 dark:text-blue-400 hover:underline">
                  [Code]
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}