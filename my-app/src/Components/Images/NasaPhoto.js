import React from 'react';
import { useState, useEffect } from 'react';
import './NasaPhoto.css';

function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);
    const url = 'https://api.nasa.gov/planetary/apod?api_key='
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(
                url + `${process.env.REACT_APP_NASA_KEY}`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
            
        }
    }, []);


    if(!photoData) return <div/>;

    return(
        <div>
            <img className='NasaImage'
            src={photoData.url}
            alt={photoData.title}
            />
        </div>
    )

    
}

export default NasaPhoto;









