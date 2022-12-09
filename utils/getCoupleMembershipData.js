



export async function getCoupleMembershipData(data) {



console.log('inside front end: COUPLE data:>>> ',data)


// sending data to API/Contact:
let response = await fetch('api/joinCouple', {
    method:'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        "Content-Type":"application/json",
    },
    
    body: JSON.stringify(data),

});


}


























