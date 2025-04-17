# PDF Comments POC

A Next.js application that allows users to view a document with multiple sections and add comments to each section. Built with modern web technologies and featuring a clean, intuitive interface.

## Features

- **Document Viewing**
  - View document sections in a clean, organized layout
  - Print-friendly document format
  - Responsive design for all screen sizes

- **Commenting System**
  - Add comments to specific document sections
  - User avatars with initials
  - Real-time comment updates
  - Popover-based comment form
  - Comment history with timestamps

- **User Interface**
  - Modern UI with shadcn/ui components
  - Split view: document on left, comments on right
  - Interactive section selection
  - Clean and intuitive design

## Tech Stack

- **Frontend**
  - Next.js 14 with App Router
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components
  - React Hooks for state management

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd pdf-comments
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app router
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Comments.tsx    # Comments component
│   ├── Document.tsx    # Document component
│   └── SectionedPage.tsx # Main page component
├── types/              # TypeScript types
└── lib/                # Utility functions
```

## Features in Detail

### Document Viewing
- Sections are displayed in a clean, card-based layout
- Each section is clickable to view its comments
- Print functionality for document sections
- Responsive design that works on all devices

### Commenting System
- Add comments to any section
- Comments include:
  - Author name
  - Timestamp
  - Avatar with initials
  - Comment text
- Popover-based comment form
- Real-time updates

### User Interface
- Split view layout:
  - Document sections on the left (2/3 width)
  - Comments panel on the right (1/3 width)
- Interactive elements:
  - Hover effects on sections
  - Click-to-select sections
  - Smooth transitions
- Clean, modern design with proper spacing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
