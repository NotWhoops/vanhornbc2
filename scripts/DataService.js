const apiData = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}

apiData();