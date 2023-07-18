import { AppContext } from '@/context';
import { Character } from '@/interface'
import { Box, Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { FC, Fragment, useContext } from 'react';

interface Props{
    character:Character;
}

export const RickItem:FC<Props> = ({character}) => {
    const {isLoaded} = useContext(AppContext);
    const {image,name,status,id} = character;
    
    const router = useRouter();

    const onItemClick = ( ) => {
        router.push(`/character/${id}`);
    }

  return (
    <Card sx={{ maxWidth: 345, width:300 }} onClick={onItemClick} >
        <CardActionArea>
        {
            isLoaded?<CardMedia
            component="img"
            height="140"
            image={image}
            alt={name}
          />:<Skeleton variant="rectangular" width={300} height={140} />
        }
          <CardContent>
            {
              isLoaded?
              <Fragment>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {status}
                </Typography>
              </Fragment>:
              <Box sx={{ pt: 0.5, width:300 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
              </Box>
            }
          </CardContent>
        </CardActionArea>
    </Card>
  )
}
