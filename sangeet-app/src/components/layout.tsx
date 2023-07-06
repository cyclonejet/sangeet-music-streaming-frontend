import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import TopBar from './top-bar';
import Footer from './footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TopBar />
      <main>
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
