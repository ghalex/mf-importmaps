import { useState, lazy } from 'react'
import { Button, Typography } from '@mui/joy'

const Micro = lazy(() => import("@app/example"))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography level='h3' sx={{ m: 1 }}>
        Hello -- {count}
      </Typography>
      <Micro />
      <Button variant='solid' onClick={() => setCount((count) => count + 1)}>
        Click me
      </Button>
    </>
  )
}

export default App
