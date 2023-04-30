 import '@/styles/globals.css'
//import GlobalStyles from '@mui/material/GlobalStyles';
import Layout from '../components/layout'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

// Definē tēmu, mainīgu teksta izmēru.
let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }) {
  return (
    // Piešķir tēmu, mainīgu teksta izmēru.
    <ThemeProvider theme={theme}>

      {/* Izveido izvietojumu (galvene, saturs, kājene) */}
      <Layout>
        {/* Saturs */}
        <Component {...pageProps} />
      </Layout>

    </ThemeProvider>
  )
}
