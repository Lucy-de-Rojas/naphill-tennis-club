import {useEffect, useState} from 'react';
import Layout from '../components/Layout';


import styles from '../styles/visitorsDisplay.module.css';




export default function VisitorsDisplay() {



    const [visitors, setVisitors] = useState([]);



    useEffect(()=>{


        async function getVisitors() {
            let response = await fetch('api/visitorsDisplay');
            let dataVisitors = await response.json();
            dataVisitors = dataVisitors.results;

            
            setVisitors(dataVisitors);
            console.log('visitors: ', dataVisitors);

        }



        getVisitors();





    },[]);









    return (<Layout>

<h1>All visitors:</h1>


        {
            visitors.map((item, index)=>{
                let ips = item.ips;
                ips = ips.split(',');

                console.log('isp in arrays:>>>>', ips);



                return <p className={styles.wrapper}>
                    
                    <p className={styles.shortLeftPara}>
                        <p>

                    {item.page}
                        </p>
                        <p>
                      {item.timestamp}

                        </p>
                    </p>


{/* IPs: */}
<p className={styles.ips}>

                     {ips.map((item, index)=>{
                        return <p>{item}</p>
                     })}
</p>
                      
                      
                      
                      </p>
                    //   end of wrapper para
                            })
        }
         






    </Layout>)
}