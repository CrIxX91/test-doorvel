import { rickApi } from '@/api';
import { Layout } from '@/components';
import { Character, CharacterListResponse } from '@/interface'
import { getCharacterInfoByID } from '@/utils';
import { Card, CardContent, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image';
import React from 'react'

interface Props{
    character:Character;
}

const CharacterPageName:NextPage<Props>= ({character}) => {

  const {image, name,species,gender,status} = character
  return (
    <Layout title={character.name} >
      
      <Container sx={{marginTop:'4em'}}>

      <Card>
        <CardContent>
        <Grid container spacing={2} >

<Grid item xs={12} md={4} >
  <Stack spacing={{ xs: 1, sm: 2 }} direction="row"  justifyContent="center" alignContent="center">
    <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          loading="lazy"
        />
  </Stack>
</Grid>

<Grid item xs={12} md={8} >
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
    <Typography  color="text.secondary" gutterBottom variant='h5'>
      {name}
    </Typography>
    <Typography  color="text.secondary" gutterBottom variant='body1'>
      Status:{ status}
    </Typography>
    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" justifyContent="flex-start">
      <Chip label={species} />
      <Chip label={gender} />
    </Stack>
    </CardContent>
  </Card>
</Grid>
</Grid>
        </CardContent>

      </Card>
      
          
      </Container>
      
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
    const {data} = await rickApi.get<CharacterListResponse>('/character');
    const characternames: string[] = data.results.map(cha=>cha.id.toString());
    
    return{
        paths: characternames.map( id => ({
            params: { id },
          })),
          // fallback: false,
          fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const character =await getCharacterInfoByID(id);
    
    if ( !character ) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
    
    return {
      props: {
        character
      },
    };
  };


export default CharacterPageName;