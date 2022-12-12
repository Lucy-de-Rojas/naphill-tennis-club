
import Router from 'next/router';





// getting data from individual form to save in MYSQL:
export async function getIndividualMembershipData(data) {

console.log('data from utils:',data);

// sending data to API/Contact:
let response = await fetch('api/joinUs', {
    method:'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        "Content-Type":"application/json",
    },
    
    body: JSON.stringify(data),

});




// redirecting to thank you page:
        // sharing data:
        Router.push({
            pathname:'/joinUs-thank-you',
            query: {
                first_name: data.first_name,
                surname: data.surname,
                email: data.email,
                phone: data.phone,
                address: data.address,
                date_of_birth: data.date_of_birth,
                membership: data.membership,
                membershipSTART: data.membershipSTART,
                membershipEND: data.membershipEND, 
            },
        });







}