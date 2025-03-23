# NextGen Research Institute Website

This repository contains the code for the NextGen Research Institute website, a platform designed to connect students with research opportunities and mentorship.

## Getting Started

Follow these instructions to set up the project locally for development and testing purposes.

### Prerequisites

- Node.js (v16.x or later)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/nextgen-research-website.git
cd nextgen-research-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── blocks/       # Larger content block components
│   ├── global/       # Global components (navbar, footer, etc.)
│   ├── magicui/      # UI components with special effects
│   ├── marketing/    # Marketing-specific components
│   └── ui/           # Base UI components
├── constants/        # Constants and configuration
├── functions/        # Utility functions
└── styles/           # Global styles
public/               # Static assets
```

## Main Features

- Research program application system
- Journal publication platform
- Mentorship opportunities
- Responsive design for all devices

## Making Edits

### Modifying Content

Most of the content can be updated by editing the components in the `src/components/` directory:

- To update pricing: Edit `src/constants/plans.ts`
- To modify the navbar: Edit `src/components/marketing/navbar.tsx`
- To change hero sections: Look for corresponding components in `src/components/blocks/`

### Styling

The project uses Tailwind CSS for styling. You can modify the theme in the `tailwind.config.js` file.

### Adding New Pages

1. Create a new directory in `src/app/` with the route name
2. Add a `page.tsx` file within that directory
3. Import and use components as needed

## Deployment

This is a Next.js project that can be deployed to various platforms:

- For Vercel deployment:
  ```bash
  npm run build
  # Then follow Vercel deployment instructions
  ```

- For static export:
  ```bash
  npm run build
  npm run export
  # The static files will be in the 'out' directory
  ```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

NextGen Research Institute - [contact@ngresearch.org](mailto:contact@ngresearch.org)
