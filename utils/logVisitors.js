

import { createTimestamp } from "./createTimestamp";







export  async function logVisitors(page) {



    




            const timestamp = createTimestamp();

            let response = await fetch('https://ifconfig.me/all.json');
            let visitors = await response.json();
            // detailes where traffic comes from:
            visitors = visitors.forwarded;




            const visitorData = {
                page: page,
                visitor: visitors,
                timestamp: timestamp,               
            }


            console.log('visitor data from utils:',visitorData);




            const insputsFetch = {
                method:'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    "Content-Type":"application/json",
                },
                
                body: JSON.stringify(visitorData),
            }


            const responseAPI = await fetch('api/logVisitors', insputsFetch);



     

}