export interface Comment {
  id: string;
  text: string;
  author: string;
  createdAt: Date;
}

export interface Section {
  id: string;
  title: string;
  content: string;
  comments: Comment[];
}

export interface SectionedPageProps {
  sections: Section[];
  onAddComment: (sectionId: string, comment: Omit<Comment, 'id' | 'createdAt'>) => void;
} 