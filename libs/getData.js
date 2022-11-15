

export async function getData(api) {

    let response = await fetch(api);
    let data = await response.json();
    console.log(data);

    return data;
}