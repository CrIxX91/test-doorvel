import { Box, AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";



export const NavBar = () => {
    const router = useRouter();

    const onItemClick = ( ) => {
        router.push('/');
    }

  return (
    <Box sx={{ flexGrow: 1,backgroundColor:'azure',position:'sticky',top: '0px',height: '60px',zIndex:'99'}}>
      <AppBar position="static"></AppBar>
      <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onItemClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rick And Morty
          </Typography>
        </Toolbar>
      </Box>
  )
}
