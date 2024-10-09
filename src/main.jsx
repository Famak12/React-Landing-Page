import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'
import Middlecontainer from './MiddleContainer.jsx'
import Testimonial from './Testimonials.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Middlecontainer /> 
   <Testimonial/>

  </StrictMode>,
)
