# Contributing Guide

This guide will help you contribute new LaTeX components to the library.

## Prerequisites

- Basic understanding of LaTeX
- Git knowledge
- Node.js and npm installed

## Step-by-Step Guide

### 1. Check Existing Components

Before creating a new component, browse through the existing components in `/latex/components` to ensure you're not duplicating work.

### 2. Fork and Clone

1. Fork this repository
2. Clone your fork locally
3. Install dependencies with `pnpm install`

### 3. Create New Component

Create a new file in `/latex/components` with the following structure:

```typescript
export const yourComponentName = {
  name: "Your Component Name",
  description: "Brief description of what your component does",
  category: "tables|code|math|figures|other",
  packages: ["package1", "package2"],  // Optional: Required LaTeX packages
  setupCode: "x", // Optional: Any setup code needed
  code: `
    Your LaTeX code here
    Can be multiple lines
  `,
  img: "/images/your-component-preview.png"
};
```

### 4. Add Preview Image

1. Create a preview image of your component (PNG format)
2. Add it to the `/public/images` directory
3. Use the correct directory for each category
4. Use the same name as the JS-component
5. Reference it in your component's `img` property

### 5. Testing

1. Run the development server: `npm run dev`
2. Visit `http://localhost:3000`
3. Check if your component appears and works correctly

### 6. Commit and Pull Request

1. Commit your changes with meaningful messages:
   ```bash
   git add .
   git commit -m "Add: new component <component-name>"
   ```
2. Push to your fork
3. Create a Pull Request with:
   - Clear title describing the new component
   - Brief description of what the component does
   - Screenshot of the rendered result

## Component Guidelines

- Keep the LaTeX code clean and well-formatted
- Use meaningful variable names in your code
- Add comments for complex components
- Ensure the preview image clearly shows the component's output
- Test the component thoroughly before submitting

## Need Help?

If you have questions or need help, feel free to:
1. Open an issue
2. Ask in the discussions section
3. Contact the maintainers

Thank you for contributing! 🎉