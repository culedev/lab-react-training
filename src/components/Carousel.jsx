import {useState} from 'react'

const Carousel = ({images}) => {
    
    const [position, setPosition] = useState(0)
  
    const nextImage = () => {      
        setPosition(position === images.length-1 ? 0 : position + 1 )
    } 
    const previousImage = () => {
        setPosition(position === 0 ? images.length-1 : position - 1 )
    }

  return (
    <div>
        <img src={images[position]} alt="" />
        <br />
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
    </div>
  )
}

export default Carousel