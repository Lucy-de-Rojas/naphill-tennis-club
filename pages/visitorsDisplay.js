import {useEffect, useState} from 'react';
import Layout from '../components/Layout';

import styles from '../styles/visitorsDisplay.module.css';




export default function VisitorsDisplay() {






    const perPage = 7;


    const [visitors, setVisitors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [extraPage, setExtraPage] = useState(0);
    const [numberOfVisitors, setNumberOfVisitors ] = useState(0)



    useEffect(()=>{


        async function getVisitors() {
            console.clear();

            let response = await fetch('api/visitorsDisplay');
            let dataVisitors = await response.json();
            // dataVisitors = dataVisitors.results;

            console.log('visitors: ', dataVisitors);
            setVisitors(dataVisitors);










            
            // PAGINATION:


            console.log('number of visitors:', visitors.length)

            setNumberOfPages(Math.floor(visitors.length/10));
            console.log('number of pages: >>', numberOfPages);
            
            
            
            console.log('extra page:', numberOfPages%perPage >0)

            if(numberOfPages%perPage>0) {
                
                setNumberOfPages(numberOfPages+1);
                console.log('number of pages after extra page:>>> ',numberOfPages)

            }





            // end of PAGINATION
            



        }



        getVisitors();





    },[]);









    return (<Layout>

<h1>All visitors:</h1>




{/* buttons: */}





{/* end of buttons */}




{/* display visitors section: */}



{

visitors.map((item, index)=>{
    return <p key={index}>{item.page}</p>;
})


}

{/*end of  display visitors section: */}

    </Layout>)
}