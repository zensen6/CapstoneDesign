import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const useGeolocation=()=>{
    const[location, setLocation]= useState({
        loaded: false ,
        coordinates : {lat:"", lng:""}
    }); 
    const onSuccess=(location)=>{
        setLocation({
            loaded:true,
            coordinates:{
                lat:location.coords.latitude, 
                lng: location.coords.longitude,
            },
        }); 
    }; 
    const onError=(error)=>{
        setLocation({
            loaded:true,
            error, 
        }); 
    }
    useEffect(()=>{
        if(!("geolocation" in navigator)){
            onError({
                code:0, 
                message:"Geoloaction not supported",
            });  

        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },[]);

    return 
}
export default useGeolocation