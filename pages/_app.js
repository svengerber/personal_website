import Layout from '../components/layout';
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}

export default MyApp;