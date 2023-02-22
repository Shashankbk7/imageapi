
import { useState } from "react";

const useFetch = () => {
    const [imageInformation, setImageInformation] = useState<any>();
    const [error, setError] = useState<any>();
    const imageResponseHandler = async(urlBoolean:Boolean, pageNumber:Number, imageId:any) =>{
        let url;
        if(urlBoolean === true){
            url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${20}`
        }else{
            url = `https://picsum.photos/id/${imageId}/info`
        }

        try{
            const response = await fetch(url,{
                method:"GET",
                headers:{
                    'Content-type': 'application/json'
                }
            },
            )
            const responseData = await response.json();
            setImageInformation(responseData);
        }
        catch(error){
            setError(error)
        }
    }
    
    return{
        imageInformation,
        imageResponseHandler,
        error
    }
}


export default useFetch;