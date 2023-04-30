import Header from './header'
import Footer from './footer'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Layout({ children}) {
  return (
    <>
      {/* Galvene */}
      <Header/>

      {/* Minimālais satura augstums ir pilna ekrāna augstums*/}
        <Container maxWidth="lg" sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',  mt :'64px'
      }}>
        {children}
      </Container>
      {/* Kājene */}
      <Footer />
    </>
  )
}