
import { Stack } from '@mui/material';
import { RickItem } from './RickItem';
import { FC, Fragment, Suspense, useContext } from 'react';
import { AppContext } from '@/context';
import { RickPaginator } from './RickPaginator';

export const RickList:FC = () => {

  const {characters,isLoaded} = useContext(AppContext);

  return (
    
    <Fragment>

          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{marginTop:'4em'}} justifyContent="center">
          {
            isLoaded ? <Fragment>
              <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{marginTop:'4em'}} justifyContent="center">
                {
                  isLoaded ? characters?.map((item)=> <RickItem key={item.name} character={item} />):''
                }
              </Stack>
              <RickPaginator/>
            </Fragment>:<h1>Cargando...</h1>
          }
        </Stack>  
      
    </Fragment>
  )
}
