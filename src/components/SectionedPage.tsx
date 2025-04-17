'use client';

import { useState } from 'react';
import { Comments } from '@/components/Comments';
import { Document } from '@/components/Document';
import { SectionedPageProps } from '@/types';

export function SectionedPage({ sections, onAddComment }: SectionedPageProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const currentSection = sections.find(s => s.id === activeSection) || null;

  const handleAddComment = (comment: { text: string; author: string }) => {
    if (activeSection) {
      onAddComment(activeSection, comment);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Document Sections */}
        <div className="md:col-span-2">
          <Document 
            sections={sections}
            activeSection={activeSection}
            onSectionClick={setActiveSection}
          />
        </div>

        {/* Comments Section */}
        <div className="md:col-span-1">
          <Comments 
            section={currentSection} 
            onAddComment={handleAddComment} 
          />
        </div>
      </div>
    </div>
  );
} 