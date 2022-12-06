


// returns string: YYYY-MM-DD HH:MM:SS
export function createTimestamp() {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth() + 1;
    const day = dateNow.getDate();
    const hour = dateNow.getHours();
    const minute = dateNow.getMinutes();
    const second = dateNow.getSeconds();


    const timestamp = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    return timestamp;
}






