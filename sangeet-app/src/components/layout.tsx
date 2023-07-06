import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import TopBar from './top-bar';

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
      <main>{children}</main>
      <div>footer</div>
    </ThemeProvider>
  );
}
