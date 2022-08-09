import {useState} from 'react'


const ClickablePicture = ({img, imgClicked}) => {
   console.log(img)
    const [photo, setPhoto] = useState(img)

    const swapPhoto = (image) => image === photo ? setPhoto(imgClicked) : setPhoto(img)

  return (
    <div>
        <img src={photo} alt="" onClick={() =>{swapPhoto(img)}} width={"200px"} height={"200px"}/>
    </div>
  )
}

export default ClickablePicture