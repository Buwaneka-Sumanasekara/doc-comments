'use client';

import { SectionedPage } from '@/components/SectionedPage';
import { Section } from '@/types';
import { useState } from 'react';

export default function Home() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: 'section-1',
      title: 'Introduction',
      content: 'This is the introduction section of our document.',
      comments: [],
    },
    {
      id: 'section-2',
      title: 'Main Content',
      content: 'This is the main content section of our document.',
      comments: [],
    },
    {
      id: 'section-3',
      title: 'Conclusion',
      content: 'This is the conclusion section of our document.',
      comments: [],
    },
  ]);

  const handleAddComment = (sectionId: string, comment: { text: string; author: string }) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            comments: [
              ...section.comments,
              {
                id: Math.random().toString(36).substr(2, 9),
                ...comment,
                createdAt: new Date(),
              },
            ],
          };
        }
        return section;
      })
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Document with Comments</h1>
        <SectionedPage sections={sections} onAddComment={handleAddComment} />
      </div>
    </main>
  );
}
