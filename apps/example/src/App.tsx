// import { useState } from "react";
import { Box, Button, Typography } from '@mui/joy'

const App = () => {
  return (
    <Box sx={{ p: 2, border: '1px solid red' }}>
      <Typography level='h1'>Hello from Example</Typography>
      <Button variant="solid" color="success" onClick={() => console.log('clicked')}>
        Show Me
      </Button>
      <Button color='danger'>Delete2</Button>
    </Box>
  );
};

export default App