import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Stack, IconButton, Grow } from '@mui/material';



export default function Footer() {
  
    {/* Iekrāsots "kvadrāts"*/}
    return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
        >
        {/* Izvieto footer saturu */}
        <Container maxWidth="lg" sx={{display:'flex', justifyContent: 'space-between'}}>
          
          {/* Teksts */}
          <p>Autors: Paulis Kristofers Siks</p>

          {/* Soc mēdiju ikonas / linki */}
          <Box component="div">
            <IconButton size='small' edge='start' aria-label='Facebook' href='https://www.facebook.com'><FacebookIcon/></IconButton>
            <IconButton size='small' edge='start' aria-label='Instagram' href='https://www.instagram.com'><InstagramIcon/></IconButton>
            <IconButton size='small' edge='start' aria-label='LinkedIn' href='https://www.linkedin.com'><LinkedInIcon/></IconButton>
          </Box>
        </Container>
      </Box>
    )
  }