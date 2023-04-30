import { AppBar, IconButton, Stack, Toolbar, Typography, Divider, Grid, Box, Link} from "@mui/material";
import Head from 'next/head'
// import Link from "next/link";
export default function Other() {

    return(
        <>
            <Head>
                <title>Cits</title>
                <meta name="description" content="Bilde šajā lapā mainas atkarībā no ekrāna izmēra." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />z
            </Head>

            {/* Mainiga bilde */}
            <Box
                component="img"
                sx={{
                    content: {
                        xs: `url(/puss-in-boots-poster.jpg)`, //img src from xs up to sm
                        sm: `url(/puss-in-boots-banner.jpg)`,  //img src from sm and up
                        width: '100%',
                        maxHeight: '50vh',
                        objectFit: 'cover',
                    }
                }}
                alt="Puss in the boots banner"
            />

            {/* Aprakstrs / teksts */}
            <Typography variant="h2" component="h2" sx={{mt:2, mb:2}}>
                Šī bilde mainās
            </Typography>

            <Typography variant="h5" component="h5" sx={{mb:2}}>
                kad ekrāns paliek šaurs!
            </Typography>

            <Typography variant="body1" component="p" sx={{mb:2}}>
                {/* <Link>This is good (it's Inconsolata)</Link> */}
                Šis bilde mainās starp diviem variantiem, poster un wallpaper, aktarībā no ekrāna izmēra. <br/>
                Bildes iegūtas <Link href={'https://fanart.tv/movie/315162/puss-in-boots-the-last-wish/?section=wallpaper'}>fanart.tv</Link>.
            </Typography>
        </>
    )
}