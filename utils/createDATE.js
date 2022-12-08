


// returns string: YYYY-MM-DD HH:MM:SS
export function createDATE() {
    // console.clear()
    
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    let month = dateNow.getMonth() + 1;
    let day = dateNow.getDate();

    const hour = dateNow.getHours();
    const minute = dateNow.getMinutes();
    const second = dateNow.getSeconds();

// fix for single digit day:
if(day<=10) {
    day = '0'+day.toString();
}

// fix for single digit month:
    if( month <= 10) {
        month = '0' + month.toString();
    }



    const DATE = `${year}-${month}-${day}`;
    const DATEexp = `${year+1}-${month}-${day}`;
    const membershipYEars = `${year}-${year+1},`;
 
    return {DATE: DATE, DATEexp: DATEexp, membershipYEars: membershipYEars};
}






