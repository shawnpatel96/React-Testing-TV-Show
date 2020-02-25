import axios from 'axios';


export const fetchShow = ()=>{
    return axios 
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then (response=>{
        console.log(response, "axios call from fetchShow.js")
        return response  //.data

    })
    .catch(error=>{
        console.log("ERROR:", error)
    })
}