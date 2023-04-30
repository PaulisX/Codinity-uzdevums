import Head from 'next/head'
import Image from 'next/image'
import {Typography, Card, CardContent, CardActionArea} from "@mui/material";
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Testa uzdevums</title>
        <meta name="description" content="This is the first page of codinity task." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />z
      </Head>

      {/* Pilna skata sākums (režģis)*/}
      <Grid
        container

        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: 'calc(-64px + 100vh)' }}>

          {/* Kreisā puse*/}
          <Grid item xs={12} sm={6} sx={{justifyContent: "center"}}>
            <Typography variant="h2" component="h2" sx={{mb:6}}>
              Codinity group tests
            </Typography>
            <Typography variant="body1" component="p">
              Šī lapa ir testa uzdevums, kas ir daļa no Codinity group prakses vietas konkursa.
            </Typography>
          </Grid>

          {/* Labā puse*/}
          <Grid item xs={12} sm={6} style={{justifyContent: "center"}}>
            <Image src="/TestImage.png" 
              alt="Generic image" 
              title="Banner"
              width={400}
              height={400}
              priority
              style={{width: '100%', height:'auto'}}/>
          </Grid>

      </Grid>

      {/* Kartiņu sadaļa */}
      <Typography variant="h3" component="h3" sx={{mt:2, mb:2}} align={'center'}>
        Kartiņas
      </Typography>
      <Typography variant="h5" component="h5" sx={{mt:2, mb:2}} align={'center'}>
        Šīs kartiņas ir dinamiski izveidotas
      </Typography>
      
      {/* Kartiņu režģis */}
      <Grid container alignItems="stretch" sx={{mb:5, background:'transparent', justifyContent:'center'}}>

        {/* Piemēra kartiņa ar īsu saturu */}
        <Grid component={Card} item  xs={12} sm={5} md={3} sx={{display: 'flex', alignContent: 'flex-start', m:1}}>
          <CardActionArea >
            <CardContent sx={{height:1}}>
              <Typography gutterBottom variant="h5" component="div">
                Īsa kartiņa
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                Šī kartiņa ir ļoti īpaša, ne dinamiska un īsa!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>

        {/* Ģenerē dinamiski kartiņas */}
        {Array(7).fill().map((_,i)=>{
          return(
            <Grid key={i}  component={Card} item  xs={12} sm={5} md={3} sx={{display: 'flex', alignItems: 'flex-start', m:1}}>
              <CardActionArea>
                <CardContent sx={{height:1}}>
                  <Typography gutterBottom variant="h5" component="div">
                    Kartiņa {i+1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {i+1}^2 = {(i+1)*(i+1)}     <br></br>        
                    Kartiņas saturs, teksts. Šis saturs ir ļoti svarīgs, un nozīmīgs. Tā neizlasīšana var atstāt sekas kā ne optimāli pavadīts laiks. Šo kartiņu būtu jāizlas ikvienai personai.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
          )})}
      </Grid>
    </>
  )
}
