'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Section } from '@/types';

interface DocumentProps {
  sections: Section[];
  activeSection: string | null;
  onSectionClick: (sectionId: string) => void;
}

export function Document({ sections, activeSection, onSectionClick }: DocumentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Handle initial hash on page load
    const hash = window.location.hash.slice(1);
    if (hash) {
      onSectionClick(hash);
      // Small delay to ensure the DOM is ready
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    router.push(`${pathname}#${sectionId}`, { scroll: false });
    scrollToSection(sectionId);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Document Print</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; }
              .section { margin-bottom: 2rem; }
              .title { font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; }
              .content { margin-bottom: 1rem; }
              @media print {
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            ${sections.map(section => `
              <div class="section" id="${section.id}">
                <div class="title">${section.title}</div>
                <div class="content">${section.content}</div>
              </div>
            `).join('')}
            <script>
              window.onload = function() {
                window.print();
                window.onafterprint = function() {
                  window.close();
                };
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-4">
        <Button onClick={handlePrint} variant="outline" className="no-print">
          Print Document
        </Button>
      </div>
      {sections.map((section) => (
        <Card 
          key={section.id} 
          id={section.id}
          ref={(el) => {
            sectionRefs.current[section.id] = el;
          }}
          className={`hover:bg-muted/50 transition-colors cursor-pointer ${
            activeSection === section.id ? 'bg-muted/50' : ''
          }`}
          onClick={() => handleSectionClick(section.id)}
        >
          <CardHeader>
            <CardTitle className="text-lg">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">{section.content}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 