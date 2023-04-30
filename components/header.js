import { AppBar, IconButton, Stack, Toolbar, Typography,useMediaQuery, Menu, Button, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
// import { useMediaQuery } from "@mui/material-ui/core";
import Link from 'next/link'
import Container from '@mui/material/Container';



export default function Header() {
  
  // Vai ekrāns ir mazāks par noteikto robež-punktu (sm)
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));

  // Izvietojums linkiem uz citām lapām uz lielākiem ekrāniem
  function DesktopNavigation() {
    return (
      <Stack direction="row" spacing={3}>
        <Link href="/">Sākums</Link>
        <Link href="/loremIpsum">Lorem Ipsum</Link>
        <Link href="/other">Cits</Link>
      </Stack>
    )
  }


  // Izvietojums linkiem uz citām lapām uz maziem ekrāniem
  function MobileNavigation() {
    // Definē anchor mainīgo
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    // Apstrādā menu pogas klikšķi
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    // Vai izvēlnei jābūt atvērai
    const open = Boolean(anchorEl);

    return (
      <div>

        {/* Poga, kas atver / aizver izvēlni */}
        <IconButton
            onClick={handleClick}
            aria-controls={open ? 'nav-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon />
        </IconButton>

        {/* Izvēlne */}
        <Menu
          id="nav-menu"
          
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}

          open={open}

          onClose={handleClose}
          onClick={handleClose}>
            
          {/* Navigācijas linki / pogas */}
          <Link href="/"><MenuItem onClick={handleClose}>Sākums</MenuItem></Link>
          <Link href="/loremIpsum"><MenuItem onClick={handleClose}>Lorem Ipsum</MenuItem></Link>
          <Link href="/other"><MenuItem onClick={handleClose}>Cits</MenuItem></Link>
        </Menu>
      </div>
    )
  }



  return (
    <AppBar sx={{position: 'fixed'} } >

      {/* Ierobežo platumu*/}
      <Container maxWidth="lg">
        <Toolbar>

          {/* Kreisā puse (Teksts) */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <Link href="/">
                Codinity tests  
            </Link>
          </Typography>

          {/* Navigācijas pogas / linki */}
          {isSmallScreen ? <MobileNavigation/> : <DesktopNavigation />}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

