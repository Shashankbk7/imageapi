import React, { useEffect } from 'react';
import useFetch from '../Hooks/use-fetch';
import styles from './ImageGrid.module.css';
import { motion } from 'framer-motion'
import image from '../../assets/image.png'
import { Link } from 'react-router-dom';
import MappingContainer from '../Essentials/MappingContainer';
import Footer from '../Footer/Footer';

const pageNumbers:Array<Number> = [1,2,3,4,5,6,7];
const ImageGrid = ():JSX.Element => {
    const { imageInformation, imageResponseHandler, error=0} = useFetch();

    useEffect(()=>{
        imageResponseHandler(true,1,null)
    },[])

    return(
        <div>
    <div style={{
        maxWidth:'1200px',
        margin:'auto'
    }}>
        <div className={styles.headerFlex}>
        <img src={image} alt="Image_Logo"/>
         <h1 className={styles.mainHeading}>Image Grid</h1>
        </div>

        <div className={styles.pageNumberFlex}>
            {pageNumbers.map((i:any)=>{
                return (
                <motion.div whileHover={{ scale: 1.1 }}>
                     <p key={i} onClick={()=> imageResponseHandler(true,i,0)}>{i}</p>
                </motion.div>
            )
            })}
        </div>

        <MappingContainer>
        {imageInformation ? imageInformation.map((i:any)=>{
            return(
                <motion.div whileHover={{ scale: 1.03 }} className={styles.infoFlex} key={i.id}>
                   <div key={i.id} className={styles.insideInfoFlex}>
                    <Link to={`/${i.id}`}>
                    <img className={styles.image} src={i.download_url} alt="Picsum_Random_Photos" />
                    </Link>
                   </div>
                </motion.div>
            )
        }): <h1>'Image Not Available'</h1>}
        </MappingContainer>
        </div>
        <Footer />
        </div>
    )
}
export default ImageGrid;