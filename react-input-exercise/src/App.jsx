import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './components/input'
import Label from './components/Label'
import './app.css'


function App() {
    const [value, setValue] = useState('')

  return (
      <div class="container">
      <Input 
      value = {value}
      onChange={(meghdar) => {
        setValue(meghdar)
      }}/>
  
      <Label
      value = {value}
       />
        </div>
  )
      
}

export default App
