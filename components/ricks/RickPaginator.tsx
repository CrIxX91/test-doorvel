import { AppContext } from '@/context';
import { Button, Stack } from '@mui/material';
import { Fragment, FC, useContext } from 'react';

export const RickPaginator:FC = () => {
    const {info,updatePage} = useContext(AppContext);

    const handleClick = (next:boolean = false)=>{
        let path;
        
        if(next){
            console.log('limite anterior');
        
            if(info?.next){
                path = info.next.split('/api')[1];
                console.log(path)
                updatePage(path)
            }
            
        }else{
            console.log('limite siguiente');
            if(info?.next){
                path = info.next.split('/api')[1];
                console.log(path)
                updatePage(path);
            }
        }
    }

  return (
    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{marginTop:'2em',marginBottom:'2em'}} justifyContent="center">
            <Button variant="contained" onClick={()=>handleClick()}>Anterior</Button>
            <Button variant="contained" onClick={()=>handleClick(true)}>Siguiente</Button>
    </Stack>
  )
}
