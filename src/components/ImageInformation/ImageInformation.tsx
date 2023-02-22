import React, {useEffect} from 'react'
import useFetch from '../Hooks/use-fetch';
import { useParams } from 'react-router-dom';
import styles from './ImageInformation.module.css'
import image from '../../assets/picture.png'

const ImageInformation = ():JSX.Element => {
  const { id } = useParams();
  const { imageInformation, imageResponseHandler, error} = useFetch();

  useEffect(()=>{
      imageResponseHandler(false,0,id)
  },[])

  return (
    <div style={{
      height:'100%'
    }}>
      <div className={styles.sectionFlex}>
        <img src={image} alt="Image Information Logo"/>
      <h1>Image Information</h1>
      </div>
      {!error && imageInformation ?
       <div className={styles.informationFlex}>
        <h2>Author: {imageInformation.author}</h2>
        <img src={imageInformation.download_url} />
        </div>:
        <h1>Image Not Found</h1>
        }

    </div>
  )
}

export default ImageInformation