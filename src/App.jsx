import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './pages/Home';
import VideoForm from './pages/VideoForm';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Green color
      light: '#4caf50',
      dark: '#1b5e20',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Header />
          <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new-video" element={<VideoForm />} />
              <Route path="/edit-video/:id" element={<VideoForm />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;