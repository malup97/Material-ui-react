import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

export const AppBarItem = () => {
    return (
        <AppBar className='App-Bar' position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Material UI
                </Typography>
            </Toolbar>
        </AppBar>
    )
}