'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, BookOpen, CheckCircle, CircleDot } from 'lucide-react';

interface Book {
  title: string;
  author: string;
  status: 'In Progress' | 'Completed' | 'Not Started';
  category: string;
  chapters: {
    number: number;
    title: string;
    solutionUrl?: string;
  }[];
}

const readingList: Book[] = [
  {
    title: 'Introduction to Electrodynamics',
    author: 'David J. Griffiths',
    status: 'In Progress',
    category: 'Physics',
    chapters: [
      { number: 1, title: 'Vector Analysis', solutionUrl: 'https://drive.google.com/file/d/1QO1PreOPa0bNp8YZU5TA-_h_aCZw0uVg/view?usp=sharing' },
      { number: 2, title: 'Electrostatics', solutionUrl: 'https://drive.google.com/file/d/1aGJq5evUv1UqWo7DPzp1asbKY5s8TEzb/view?usp=sharing' },
      { number: 3, title: 'Potentials' },
      { number: 4, title: 'Electric Fields in Matter' },
      { number: 5, title: 'Magnetostatics' },
      { number: 6, title: 'Magnetic Fields in Matter' },
      { number: 7, title: 'Electrodynamics' },
      { number: 8, title: 'Conservation Laws' },
      { number: 9, title: 'Electromagnetic Waves' },
      { number: 10, title: 'Potentials and Fields' },
      { number: 11, title: 'Radiation' },
      { number: 12, title: 'Electrodynamics and Relativity' }
    ]
  },
  {
    title: 'Introduction to Quantum Mechanics',
    author: 'David J. Griffiths, Darrell F. Schroeter',
    status: 'Not Started',
    category: 'Physics',
    chapters: [
      { number: 1, title: 'The Wave Function' },
      { number: 2, title: 'Time Independent Schrödinger Equation' },
      { number: 3, title: 'Formalism' },
      { number: 4, title: 'Quantum Mechanics in Three Dimensions' },
      { number: 5, title: 'Identical Particles' },
      { number: 6, title: 'Time-independent Perturbation Theory' },
      { number: 7, title: 'The Variational Principle' },
      { number: 8, title: 'The WKB Approximation' },
      { number: 9, title: 'Time-dependent Perturbation Theory' },
      { number: 10, title: 'The Adiabatic Approximation' },
      { number: 11, title: 'Scattering' },
    ]
  },
  {
    title: 'The Oxford Solid State Basics',
    author: 'Steven H. Simon',
    status: 'Not Started',
    category: 'Physics',
    chapters: [
      { number: 1, title: 'About Condensed Matter Physics' },
      { number: 2, title: 'The Early Days of Solid State ' },
      { number: 3, title: 'Structure of Materials' },
      { number: 4, title: 'Toy Models of Solids in One Dimension' },
      { number: 5, title: 'Geometry of Solids' },
      { number: 6, title: 'Neutron and XRay Diffraction' },
      { number: 7, title: 'Electrons in Solids' },
      { number: 8, title: 'Magnetism and Mean Field Theory' }
    ]
  },
  {
    title: 'Deep Learning',
    author: 'Ian Goodfellow, Yoshua Bengio, and Aaron Courville',
    status: 'Not Started',
    category: 'Computer Science',
    chapters: [
      { number: 1, title: 'Introduction' },
      { number: 2, title: 'Linear Algebra'},
      { number: 3, title: 'Probability and Information Theory'}
    ]
  },
  {
    title: 'Magnetism in Condensed Matter',
    author: 'Steven Blundell',
    status: 'Not Started',
    category: 'Physics',
    chapters: [
      { number: 1, title: 'Introduction' },
      { number: 2, title: 'Isolated Magnetic Moments' },
      { number: 3, title: 'Environments' },
      { number: 4, title: 'Interactions' },
      { number: 5, title: 'Order and Magnetic Structures' },
      { number: 6, title: 'Order and Broken Symmetry' },
      { number: 7, title: 'Magnetism in Metals' },
      { number: 8, title: 'Competing Interactions and Low Dimensionality' }
    ]
  },
];

export default function BooksPage() {
  const [expandedBook, setExpandedBook] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedBook(expandedBook === title ? null : title);
  };

  // Helper to determine status styling classes
  const getStatusConfig = (status: Book['status']) => {
    switch (status) {
      case 'Completed':
        return {
          bg: 'bg-emerald-500/10 dark:bg-emerald-500/5',
          text: 'text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
          icon: <CheckCircle className="w-3.5 h-3.5" />
        };
      case 'In Progress':
        return {
          bg: 'bg-blue-500/10 dark:bg-blue-500/5',
          text: 'text-blue-600 dark:text-blue-400 border-blue-500/20',
          icon: <BookOpen className="w-3.5 h-3.5" />
        };
      case 'Not Started':
      default:
        return {
          bg: 'bg-zinc-500/10 dark:bg-zinc-400/5',
          text: 'text-zinc-600 dark:text-zinc-400 border-zinc-500/20',
          icon: <CircleDot className="w-3.5 h-3.5" />
        };
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">Scientific Readings & Solutions</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Tracking technical literature read cover-to-cover, along with my personal chapter-by-chapter problem set solutions.
        </p>
      </div>

      <div className="space-y-4">
        {readingList.map((book) => {
          const isExpanded = expandedBook === book.title;
          const solvedChaptersCount = book.chapters.filter(c => c.solutionUrl).length;
          const statusConfig = getStatusConfig(book.status);

          return (
            <div 
              key={book.title} 
              className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50/30 dark:bg-zinc-900/10"
            >
              {/* Header Toggle */}
              <button
                onClick={() => toggleExpand(book.title)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    {/* Category Label */}
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      {book.category}
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-700 text-xs">•</span>
                    {/* Professional Status Badge */}
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${statusConfig.bg} ${statusConfig.text}`}>
                      {statusConfig.icon}
                      {book.status}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{book.title}</h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">by {book.author}</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-zinc-400">
                    {solvedChaptersCount}/{book.chapters.length} Solved
                  </span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Collapsible Chapters Panel */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40"
                  >
                    <div className="p-5 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Chapters & Solutions</h4>
                      <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
                        {book.chapters.map((chapter) => (
                          <div key={chapter.number} className="flex justify-between items-center py-2.5 text-sm">
                            <span className="text-zinc-700 dark:text-zinc-300">
                              <span className="font-mono text-zinc-400 mr-2">Ch {chapter.number}.</span>
                              {chapter.title}
                            </span>
                            {chapter.solutionUrl ? (
                              <a
                                href={chapter.solutionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline border border-blue-200 dark:border-blue-800/60 px-2 py-0.5 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all"
                              >
                                View Solutions
                              </a>
                            ) : (
                              <span className="text-xs font-mono text-zinc-400 italic">No Solutions Yet</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}