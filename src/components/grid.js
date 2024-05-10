import Box from '@mui/material/Box';

import { Grid } from "@mui/material";

export const GridItem = () => {
    return (
        <center>
            <div style={{ width: "50%", paddingTop: 50 }}>
                <Grid container spacing={3} justifyContent={'center'}>
                    <Grid item xs={5}>
                        <Box sx={{
                            backgroundColor: 'lightgreen',
                            padding: 1, textAlign: 'center',
                        }}>
                            GRID ONE
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{
                            backgroundColor: 'lightgreen',
                            padding: 1, textAlign: 'center',
                        }}>
                            GRID TWO
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{
                            backgroundColor: 'lightgreen',
                            padding: 1, textAlign: 'center',
                        }}>
                            GRID THREE
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{
                            backgroundColor: 'lightgreen',
                            padding: 1, textAlign: 'center',
                        }}>
                            GRID FOUR
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{
                            backgroundColor: 'lightgreen',
                            padding: 1, textAlign: 'center',
                        }}>
                            GRID FIVE
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{
                            backgroundColor: 'lightgreen',
                            padding: 1, textAlign: 'center',
                        }}>
                            GRID SIX
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </center>
    )
}