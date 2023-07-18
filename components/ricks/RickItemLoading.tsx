import { Box, Skeleton } from '@mui/material'
import { FC } from 'react'

const RickItemLoading:FC = () => {
  return (
        <Box sx={{ pt: 0.5, width:300 }}>
            <Skeleton />
            <Skeleton width="60%" />
        </Box>    
  )
}

export default RickItemLoading