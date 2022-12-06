import { useState, useEffect} from 'react';

import {createTimestamp} from '../utils/createTimestamp';






export async function logVisitors(page) {

    const [visitorIPs,setVisitorIPs] = useState('');



    useEffect(() => {

        async function getVisitorIPs() {

            let response = await fetch('https://ifconfig.me/all.json');
            let visitors = await response.json();
            visitors = visitors.forwarded;

            setVisitorIPs(visitors);


            console.log(`data from ifconfig.me/forward for page: ${visitors}}`,visitors);
            




        const timestamp = createTimestamp();

    //  sending to api/logVisitors:

    let responseAPI = await fetch('https://api/logVisitors', {})





        }


        getVisitorIPs();
    },[]);



    // console.log('LOG VISITORS: page: >>>> ',page)



    return page;
}