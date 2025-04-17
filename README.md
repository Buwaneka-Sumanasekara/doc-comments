# PDF Comments App

A modern web application built with Next.js, shadcn, and TypeScript that allows users to add comments to different sections of a document.

## Features

- **Section-based Document View**: View and interact with document sections
- **Interactive Comments**: Add, edit, and delete comments on specific sections
- **User Avatars**: Visual representation of comment authors
- **Hash-based Navigation**: Direct links to specific sections with smooth scrolling
- **Print Functionality**: Print-friendly document view with comments
- **Modern UI**: Built with shadcn components and Tailwind CSS
- **TypeScript Support**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **State Management**: React Context + useState
- **Form Handling**: React Hook Form
- **Icons**: Lucide React

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pdf-comments.git
   cd pdf-comments
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Document.tsx      # Document display component
│   ├── CommentBox.tsx    # Comment input component
│   └── ui/               # shadcn components
├── types/                # TypeScript type definitions
│   └── index.ts         # Type definitions
└── styles/              # Global styles
    └── globals.css      # Global CSS
```

## Features in Detail

### Document Navigation
- Click on any section to highlight it and update the URL hash
- Direct links to specific sections using hash-based navigation
- Smooth scrolling to sections when clicking or using direct links
- Print button to generate a print-friendly version of the document

### Comments System
- Add comments to any section
- Edit and delete your own comments
- View comments with user avatars
- Comments are displayed in a popover for better space management

### User Experience
- Modern, clean interface using shadcn components
- Responsive design that works on all screen sizes
- Smooth animations and transitions
- Print-friendly layout with proper styling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
