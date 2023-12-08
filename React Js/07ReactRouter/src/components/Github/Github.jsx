/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/akku0269')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

     return(
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
            Github followers: {data.followers}
            <img className="" src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
     )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}