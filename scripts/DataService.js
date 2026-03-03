const apiData1 = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/AddingTwoNumbers/AddingTwoNumbers");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}
const apiData2 = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/AskingQuestions/AskingQuestions");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}
const apiData3 = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/GuessIt/GuessIt");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}
const apiData4 = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/HelloWorld/HelloWorld");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}
const apiData5 = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/MadLib/MadLib");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}
const apiData6 = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/Magic8Ball/Magic8Ball");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}
const apiData7 = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/OddorEven/OddorEven");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}
const apiData8 = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/RestaurantPicker/RestaurantPicker");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}
const apiData9 = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/ReverseItAlphanumeric/ReverseItAlphanumeric");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}
const apiData10 = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/ReverseItNumbers/ReverseItNumbers");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}

apiData1();
apiData2();
apiData3();
apiData4();
apiData5();
apiData6();
apiData7();
apiData8();
apiData9();
apiData10();