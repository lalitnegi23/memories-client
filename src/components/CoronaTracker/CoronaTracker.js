import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CoronaTracker = () =>{
    const url='https://covid19.mathdro.id/api/countries/india';
    const [data,setData] = useState({

    })
    useEffect(() => {
        async function fetchData() {
            try{
                const {data :{confirmed ,recovered ,deaths, lastUpdate}} =await axios.get(url);
                console.log(await axios.get(url));
                setData({confirmed ,recovered ,deaths, lastUpdate})
                }
                catch(error)
                {
                }
        }
        fetchData();
      }, []);

    
        if(!data.confirmed){
            return 'loading';
            }
        else{
            return(
                <div>
                <h1 id="totalcases">Total Cases - {data.confirmed.value}</h1>
                <h2>Recovered - {data.recovered.value}</h2>
                <h3>Deaths - {data.deaths.value}</h3>
                <h3>Last Updated on - {new Date(data.lastUpdate).toDateString()}</h3>
                </div>
            )
            }

}

export default CoronaTracker;