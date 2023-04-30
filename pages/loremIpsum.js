import { AppBar, IconButton, Stack, Toolbar, Typography, Divider, Grid } from "@mui/material";
import Image from 'next/image'
import Head from 'next/head'

export default function LoremIpsum() {
    return(
        <>
            <Head>
                <title>Lorem ipsum</title>
                <meta name="description" content="The lorem ipsum text." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />z
            </Head>


            {/* Virsraksts*/}
            <Typography variant="h2" component="h2" sx={{mt:2, mb:2}} align={'center'}>
                Lorem ipsum
            </Typography>
            <Typography variant="h5" component="h5" sx={{mt:2, mb:2}} align={'center'}>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </Typography>
            
            <Divider sx={{mb:2, mt:2}} />

            {/* Satura režģis*/}
            <Grid container spacing={2}>

                {/* Kreisā puse (bilde) */}
                <Grid item xs={12} sm={4} style={{justifyContent: "center", marginTop:'auto', marginBottom:'auto'}}>
                    <Image src="/LoremIpsum.jpg" alt="Generic image" title="Banner"
                        width={400}
                        height={400}
                        style={{width: '100%', height:'auto'}}/>
                </Grid>

                {/* Labā puse (texts) */}
                <Grid item xs={12} sm={8} style={{justifyContent: "center"}}>
                    <Typography variant="body1" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu urna vel nunc tempor commodo. Nam mollis, elit maximus cursus pretium, libero nulla pellentesque quam, vitae eleifend ante sapien sed dui. Maecenas vestibulum justo nulla, vel interdum quam accumsan id. Suspendisse vel lorem turpis. Praesent vel consectetur arcu. Suspendisse luctus ultrices tortor eu feugiat. In at pretium ex, et tempor elit. Vestibulum rhoncus, erat luctus ornare fermentum, diam felis molestie tortor, nec euismod nisl est at lorem. Praesent vitae ante nibh. Aliquam luctus enim id ipsum volutpat dapibus. Duis ut enim vel felis accumsan tincidunt. Mauris sodales semper feugiat.
                        Fusce gravida erat in augue facilisis laoreet. Etiam et purus eu mauris pretium ultricies. Proin convallis placerat elit, id bibendum augue elementum id. Vestibulum in nisl venenatis, rutrum nunc vitae, mattis est. Mauris at nisl vitae dui sagittis luctus. Nunc sit amet metus non enim commodo posuere id non dui. Suspendisse iaculis pulvinar augue vel bibendum. Morbi massa lorem, consequat vel leo vel, rutrum facilisis sapien.
                        Nulla id urna nunc. Ut sapien tortor, porta sit amet erat at, laoreet interdum leo. Fusce aliquet, nisl a gravida eleifend, quam ligula aliquam leo, a ullamcorper dui massa id enim. Quisque ultrices auctor erat, eget imperdiet tortor auctor eu. Donec in aliquam metus. Nullam sed elementum turpis. Duis sit amet nisl bibendum, feugiat massa nec, vehicula ex. Donec vestibulum et eros vel tincidunt. Nunc luctus dui quis dui tristique volutpat non nec eros. Quisque sit amet faucibus sem. Fusce odio lacus, faucibus ut aliquet ac, pretium et quam. Curabitur ut mi nec ante imperdiet consequat eget non velit. Fusce sed magna hendrerit, euismod eros posuere, rutrum odio. Morbi semper hendrerit elementum. Curabitur scelerisque, magna quis euismod placerat, magna nibh volutpat tellus, a aliquam turpis massa vitae quam. Fusce euismod lacus at mauris efficitur commodo.
                        Donec at congue lorem. Ut tincidunt eros eros, ut fermentum dui rutrum a. Nulla ornare sagittis finibus. Sed vehicula leo justo, at laoreet orci tincidunt eu. Maecenas consequat eros nulla, a cursus quam finibus non. Maecenas eu lobortis dui, a consequat lectus. Pellentesque cursus dui vel diam pellentesque, a tempor sapien condimentum. Ut porta neque non tincidunt aliquam.
                        Maecenas porttitor vestibulum libero, sed condimentum quam porta ac. Cras efficitur convallis enim et lobortis. Donec tempor pharetra lobortis. Sed interdum mollis suscipit. Fusce at tellus aliquam, iaculis magna a, convallis magna. Duis laoreet mi ac dictum semper. In vehicula magna odio, sed gravida lorem iaculis eu. Nunc nisi velit, condimentum sit amet maximus id, porttitor sit amet elit. Nam vitae dolor sapien. Sed aliquam tempus augue et sollicitudin. Maecenas a nisi nulla. Integer gravida lacus dolor, eu facilisis sapien facilisis posuere. Nam nibh arcu, rutrum ac ante non, cursus vulputate ex. 
                    </Typography>
                </Grid>
            </Grid>

            <Divider sx={{mb:2, mt:2}} />

        </>
    )
}