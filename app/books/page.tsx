'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, BookOpen, CheckCircle } from 'lucide-react';

interface Book {
  title: string;
  author: string;
  status: 'In Progress' | 'Completed';
  category: string;
  chapters: {
    number: number;
    title: string;
    solutionUrl?: string; // Link to your solutions repository or hosted PDF
  }[];
}

const readingList: Book[] = [
  {
    title: 'Introduction to Electrodynamics',
    author: 'David J. Griffiths',
    status: 'In Progress',
    category: 'Physics',
    chapters: [
      { number: 1, title: 'Vector Analysis', solutionUrl: 'https://github.com' },
      { number: 2, title: 'Electrostatics', solutionUrl: 'https://github.com' },
      { number: 3, title: 'Potentials', solutionUrl: 'https://github.com' },
      { number: 4, title: 'Electric Fields in Matter' }
    ]
  },
  {
    title: 'Deep Learning',
    author: 'Ian Goodfellow, Yoshua Bengio, and Aaron Courville',
    status: 'Completed',
    category: 'Computer Science',
    chapters: [
      { number: 1, title: 'Introduction' },
      { number: 2, title: 'Linear Algebra', solutionUrl: 'https://github.com' },
      { number: 3, title: 'Probability and Information Theory', solutionUrl: 'https://github.com' }
    ]
  }
];

export default function BooksPage() {
  const [expandedBook, setExpandedBook] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedBook(expandedBook === title ? null : title);
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
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`p-1 rounded-full ${book.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'}`}>
                      {book.status === 'Completed' ? <CheckCircle className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">{book.category}</span>
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