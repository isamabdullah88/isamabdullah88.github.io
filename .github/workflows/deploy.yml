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
    title: 'Scaling First-Principles Exchange Couplings via Equivariant Graph Neural Networks',
    authors: ['Isam Balghari', 'Co-author A', 'Co-author B'],
    journalOrStatus: 'In Preparation / Preprint',
    year: '2026',
    abstract: 'We present DSpinGNN, an E(3)-equivariant Graph Neural Network combined with a Residual MLP structure designed to scale the prediction of magnetic exchange coupling parameters ($J$). By leveraging equivariant layers, our model successfully scales density functional theory (DFT) based simulations from 8 atoms to large-scale simulations containing 3,200 atoms, maintaining high spatial fidelity and rotational symmetry.',
    links: {
      arxiv: '#',
      code: 'https://github.com'
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