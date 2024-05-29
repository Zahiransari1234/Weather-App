  const temperateField = document.querySelector(".weather1");
  const cityField = document.querySelector(".weather2 p");
  const dateField = document.querySelector(".weather2 span");
  const emojiField = document.querySelector(".weather3 img");
  const weatherField = document.querySelector(".weather3 span");
  const humidityField = document.querySelector(".weather4");
  const cloudField = document.querySelector(".weather5");
  const searchField = document.querySelector(".searchField");
  const form = document.querySelector("form");

let target = "kolkata";

let info1 = "temp_c";
let info2 = "°c";
let result = info1.concat(info2);

  const fetchData = async (target) =>{

 try {
    const url = `https://api.weatherapi.com/v1/current.json?key=2c4243549e9c42928bb155709240702&q=${target}`  

    const respone = await fetch(url);
    const data = await respone.json();
  
    console.log(data);
  
    const {
      current: {
          temp_c, 
          humidity,
          cloud,
          condition:{ text, icon},
  },
      location: { name,localtime},
    } = data;
  
    updateDom(temp_c, name, localtime, icon, text, humidity, cloud);
 } 
 catch (error) {
    alert("Location Not Found");
 }
  };

  function updateDom(temperate, city, time, emoji, text, humidity, cloud){
    temperateField.innerText = temperate + "°C";
    humidityField.innerText =   humidity + "H";
    cloudField.innerText = cloud + "mm";
    cityField.innerText = city;


    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = new Date(exactDate).getDay();
    
    console.log(exactDay);

    dateField.innerText = `${exactTime}  - ${getDayFullName(exactDay)} ${exactDate}`
    emojiField.src = emoji;
    weatherField.innerText = text;
  }

  fetchData(target);

  const search =(e)=> {
      e.preventDefault();
      
      target = searchField.value;
      // console.log(target);
      
      fetchData(target);
      
    };
    
    form.addEventListener("submit",search);

    function getDayFullName (num){
      switch (num) {
          case 0:
              return "Sunday";
              case 1:
                  return "Monday";
              case 2:
                  return "Tuesday";
              case 3:
                  return "Wednesday";
              case 4:
                  return "Thursday";
              case 5:
                  return "Friday";
              case 6:
                  return "Surtaday";
      
          default:
              Sorry;
  
          }
      }

    //   function generateRandomNumber() {
    //     var randomNumber = Math.floor(Math.random() * 100) + 1;
    //     alert("pH value: " + randomNumber);
    //   }

    // document.getElementById('randomButton').addEventListener('click', function() {
    //     const randomNumber = Math.floor(Math.random() * 6.9) + 1;
    //     alert('pH value: ' + randomNumber);
    // });

    // document.getElementById('randomButton').addEventListener('click', function() {
    //     const randomNumber = (Math.random() * (6.95555 - 5.15555) + 5.1).toFixed(1);
    //     alert('pH value: ' + randomNumber);
    // });

    // document.getElementById('randomButton').addEventListener('click', function() {
    //     const min = 5.1;
    //     const max = 6.9;
    //     const randomNumber = (Math.random() * (max - min) + min).toFixed(1);
    //     alert('pH value: ' + randomNumber);
    // });

    document.getElementById('randomButton').addEventListener('click', function() {
        // Generate a random decimal value between 5.11111 and 6.95555
        const min = 5.11111;
        const max = 6.95555;
        const randomNumber = Math.random() * (max - min) + min;
        
        // Round the number to 5 decimal places
        const roundedNumber = randomNumber.toFixed(5);
        
        alert('pH value: ' + roundedNumber);
    });
