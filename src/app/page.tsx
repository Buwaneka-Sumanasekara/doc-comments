'use client';

import { SectionedPage } from '@/components/SectionedPage';
import { Section } from '@/types';
import { useState } from 'react';

export default function Home() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: 'introduction',
      title: 'Introduction',
      content: 'Welcome to our comprehensive guide. This document provides an in-depth look at various aspects of our project, from basic concepts to advanced implementations.',
      comments: [],
    },
    {
      id: 'overview',
      title: 'Project Overview',
      content: 'Our project aims to revolutionize document collaboration by providing a seamless commenting experience. The platform combines modern UI design with powerful functionality to enhance team communication.',
      comments: [],
    },
    {
      id: 'features',
      title: 'Key Features',
      content: `1. Real-time commenting system
2. Section-based document organization
3. User-friendly interface
4. Print-friendly document format
5. Hash-based navigation
6. Responsive design
7. Modern UI components`,
      comments: [],
    },
    {
      id: 'code-examples',
      title: 'Code Examples',
      content: `Here's an example of a React component:

\`\`\`tsx
interface CommentProps {
  text: string;
  author: string;
  timestamp: Date;
}

export function Comment({ text, author, timestamp }: CommentProps) {
  return (
    <div className="comment">
      <p className="author">{author}</p>
      <p className="text">{text}</p>
      <p className="timestamp">{timestamp.toLocaleDateString()}</p>
    </div>
  );
}
\`\`\`

And here's a TypeScript interface:

\`\`\`typescript
interface Section {
  id: string;
  title: string;
  content: string;
  comments: Comment[];
}
\`\`\``,
      comments: [],
    },
    {
      id: 'data-structures',
      title: 'Data Structures',
      content: `| Structure | Description | Use Case |
|-----------|-------------|----------|
| Section   | Document section | Main content container |
| Comment   | User comment | User feedback |
| User      | User profile | Authentication |
| Document  | Main document | Content management |

Key relationships:
- Document contains Sections
- Section contains Comments
- Comments belong to Users`,
      comments: [],
    },
    {
      id: 'implementation',
      title: 'Technical Implementation',
      content: `The project is built using:
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for components
- React Hooks for state management

The architecture follows modern best practices and ensures maintainability and scalability.`,
      comments: [],
    },
    {
      id: 'performance',
      title: 'Performance Considerations',
      content: `1. **Lazy Loading**
   - Components loaded on demand
   - Reduces initial bundle size
   - Improves first load time

2. **State Management**
   - Local state for UI
   - Context for global state
   - Optimized re-renders

3. **Asset Optimization**
   - Image optimization
   - Code splitting
   - Caching strategies`,
      comments: [],
    },
    {
      id: 'security',
      title: 'Security Features',
      content: `### Authentication
- JWT-based authentication
- Secure session management
- Role-based access control

### Data Protection
- Input validation
- XSS prevention
- CSRF protection

### Best Practices
- HTTPS enforcement
- Secure headers
- Regular security audits`,
      comments: [],
    },
    {
      id: 'usage',
      title: 'How to Use',
      content: `1. Navigate through sections using the left panel
2. Click on any section to view its comments
3. Add comments using the popover form
4. Print the document using the print button
5. Share specific sections using the URL hash

Each section can be directly accessed via its unique ID in the URL.`,
      comments: [],
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      content: `**Q: How do I add a comment?**
A: Click the "Add Comment" button in the comments panel and fill out the form.

**Q: Can I print the document?**
A: Yes, use the "Print Document" button to generate a print-friendly version.

**Q: How do I share a specific section?**
A: The URL automatically updates with the section ID when you click on a section.`,
      comments: [],
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: 'This project demonstrates the power of modern web technologies in creating intuitive and efficient document collaboration tools. The combination of user-friendly features and robust technical implementation makes it a valuable solution for team communication.',
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
