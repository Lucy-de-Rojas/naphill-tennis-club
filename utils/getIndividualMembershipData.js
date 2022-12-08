


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


}