# Soccer Flix 
A modern web application for managing and organizing football videos. Built with React, Vite, and Material-UI.

## Features 

- **Video Management**: Create, read, update, and delete football videos
- **Category Organization**: Videos organized by categories (Highlights, Goals, Skills, etc.)
- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Clean and attractive interface with Material-UI components
- **YouTube Integration**: Direct links to YouTube videos with thumbnail previews

## Tech Stack 

- **React 18**: Modern UI development
- **Vite**: Next-generation frontend tooling
- **Material-UI**: Beautiful and responsive components
- **React Router**: Seamless navigation
- **React Icons**: High-quality icons
- **LocalStorage**: Persistent data storage

## Project Structure 

```
soccer-flix/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx      # App header with navigation
│   │   └── VideoCard.jsx   # Video display card
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Main page with video list
│   │   └── VideoForm.jsx   # Create/Edit video form
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## Components Overview 

### Header Component
- Football-themed logo
- Responsive navigation
- Modern Material-UI AppBar

### VideoCard Component
- Hover animations
- Play button overlay
- Category chip
- Edit/Delete actions
- Responsive image sizing

### VideoForm Component
- Form validation
- Category selection
- YouTube URL validation
- Responsive layout
- Clear/Save actions

### Home Page
- Category-based organization
- Responsive grid layout
- Empty state handling
- Smooth animations

## Getting Started 

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser

## Usage Guide 

### Adding a Video
1. Click "New Video" in the header
2. Fill out the form:
   - Select a category
   - Enter title and description
   - Paste YouTube video URL
   - Add thumbnail image URL (optional)
3. Click "Save" to add the video

### Editing a Video
1. Click the edit icon on any video card
2. Modify the details in the form
3. Click "Save" to update

### Deleting a Video
1. Click the delete icon on any video card
2. Confirm the deletion in the popup

## Responsive Design 

The application is fully responsive with breakpoints:
- Mobile: < 600px (1 column)
- Tablet: 600-960px (2 columns)
- Desktop: 960-1280px (3 columns)
- Large Desktop: > 1280px (4 columns)

## Style Guide 

- **Primary Color**: Green (#2e7d32)
- **Font**: Roboto
- **Card Animations**: Subtle hover effects
- **Icons**: Material Design icons
- **Spacing**: Consistent padding and margins

## Future Enhancements 

- Video search functionality
- Custom category creation
- Video playlists
- Social sharing
- Dark mode support
- User authentication
- Cloud storage integration

## Contributing 

Feel free to submit issues and enhancement requests!
