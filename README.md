# Resume Project

This project uses JSON Resume format with the "Even" theme to generate a professional resume.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Edit your resume data in `resume.json`

## Usage

- **Serve locally**: `npm start` - This will start a local server and watch for changes
- **Build HTML**: `npm run build` - This will generate an HTML file of your resume

## Customization

- Edit `resume.json` to update your personal information, work experience, education, skills, etc.
- The project uses the "Even" theme by default, but you can change it by installing different themes

## Available Themes

You can install other JSON Resume themes like:
- `jsonresume-theme-flat`
- `jsonresume-theme-paper`
- `jsonresume-theme-elegant`

To use a different theme, install it and update the theme in your resumed configuration.

## Documentation

- [JSON Resume Schema](https://jsonresume.org/schema/)
- [Resumed CLI](https://github.com/rbardini/resumed)
- [Even Theme](https://github.com/rbardini/jsonresume-theme-even)
