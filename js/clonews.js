// change value
function showInfo(type){
  const infoListItem = document.querySelectorAll('#infoList li');
  infoListItem.forEach(item => item.classList.remove('active'));

  const clickedItem = document.getElementById(type);
  clickedItem.classList.add('active');

  const icon = document.getElementById('icon');
  const infoValue = document.getElementById('infoValue');
  const data1 = document.getElementById('emoji-data1');
  const data2 = document.getElementById('emoji-data2');
  const data3 = document.getElementById('emoji-data3');

  if (type === 'temperature') {
    icon.className = 'fa-solid fa-temperature-quarter';
    infoValue.textContent = '__°C';
    data1.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> > 26°C </span> <span>High</span>';
    data2.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> 24°C - 26°C </span> <span>Normal</span>';
    data3.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> < 24°C </span> <span>Low</span>';

    //update data
    const Temperature = 22;
      document.getElementById('infoValue').textContent = Temperature + " °C";
      const emojiElement = document.querySelector(".emoji-berubah");
      function updateEmojiClass(Temperature) {
        if (Temperature < 24) {
          emojiElement.classList.remove("fa-regular", "fa-face-smile");
          emojiElement.classList.add("fa-regular", "fa-face-sad-cry");
          emojiElement.style.color = "#c2a346";
        } else if (Temperature > 26) {
          emojiElement.classList.remove("fa-regular", "fa-face-smile");
          emojiElement.classList.add("fa-regular", "fa-face-tired");
          emojiElement.style.color = "#D24545";
        } else {
          emojiElement.classList.remove(
            "fa-regular",
            "fa-face-sad-cry",
            "fa-face-tired"
          );
          emojiElement.classList.add("fa-regular", "fa-face-smile");
          emojiElement.style.color = "#337357";
        }
      }
      updateEmojiClass(Temperature);

  } else if (type === 'rainfall') {
    icon.className = 'fa-solid fa-cloud-rain';
    infoValue.textContent = '__ mm';
    data1.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase">> 8 mm </span> <span>High</span>';
    data2.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> 2 mm - 8 mm </span> <span>Normal</span>';
    data3.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> < 2 mm </span> <span>Low</span>';

    //update data
    const rainFall = 4;
      document.getElementById('infoValue').textContent = rainFall + " mm";
      const emojiElement = document.querySelector(".emoji-berubah");
      function updateEmojiClass(rainFall) {
        if (rainFall < 2) {
          emojiElement.classList.remove("fa-regular", "fa-face-smile");
          emojiElement.classList.add("fa-regular", "fa-face-sad-cry");
          emojiElement.style.color = "#c2a346";
        } else if (rainFall > 8) {
          emojiElement.classList.remove("fa-regular", "fa-face-smile");
          emojiElement.classList.add("fa-regular", "fa-face-tired");
          emojiElement.style.color = "#D24545";
        } else {
          emojiElement.classList.remove(
            "fa-regular",
            "fa-face-sad-cry",
            "fa-face-tired"
          );
          emojiElement.classList.add("fa-regular", "fa-face-smile");
          emojiElement.style.color = "#337357";
        }
      }
      updateEmojiClass(rainFall);

  } else if (type === 'windSpeed') {
    icon.className = 'fa-solid fa-fan';
    infoValue.textContent = '__ m/s';
    infoValue.style.textTransform = 'lowercase';
    data1.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase">> 9 m/s </span> <span>High</span>';
    data2.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> 4 m/s - 9 m/s </span> <span>Normal</span>';
    data3.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> < 4 m/s </span> <span>Low</span>';

    //update data
    const windspeed = 20;
      document.getElementById('infoValue').textContent = windspeed + " m/s";
      const emojiElement = document.querySelector(".emoji-berubah");
      function updateEmojiClass(windspeed) {
        if (windspeed < 4) {
          emojiElement.classList.remove("fa-regular", "fa-face-smile");
          emojiElement.classList.add("fa-regular", "fa-face-sad-cry");
          emojiElement.style.color = "#c2a346";
        } else if (windspeed > 9) {
          emojiElement.classList.remove("fa-regular", "fa-face-smile");
          emojiElement.classList.add("fa-regular", "fa-face-tired");
          emojiElement.style.color = "#D24545";
        } else {
          emojiElement.classList.remove(
            "fa-regular",
            "fa-face-sad-cry",
            "fa-face-tired"
          );
          emojiElement.classList.add("fa-regular", "fa-face-smile");
          emojiElement.style.color = "#337357";
        }
      }
      updateEmojiClass(windspeed);

  } else if (type === 'windDirection') {
    icon.className = 'fa-solid fa-wind';
    infoValue.textContent = '__';
    data1.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> -- </span> <span>High</span>';
    data2.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> -- </span> <span>Normal</span>';
    data3.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> -- </span> <span>Low</span>';

    //update data
    // const winddirection = 'Barat';
    //   document.getElementById('infoValue').textContent = temperature + "";
    //   const emojiElement = document.querySelector(".emoji-berubah");
    //   function updateEmojiClass(winddirection) {
    //     if (temperature < 24) {
    //       emojiElement.classList.remove("fa-regular", "fa-face-smile");
    //       emojiElement.classList.add("fa-regular", "fa-face-sad-cry");
    //       emojiElement.style.color = "#c2a346;";
    //     } else if (temperature > 26) {
    //       emojiElement.classList.remove("fa-regular", "fa-face-smile");
    //       emojiElement.classList.add("fa-regular", "fa-face-tired");
    //       emojiElement.style.color = "#D24545";
    //     } else {
    //       emojiElement.classList.remove(
    //         "fa-regular",
    //         "fa-face-sad-cry",
    //         "fa-face-tired"
    //       );
    //       emojiElement.classList.add("fa-regular", "fa-face-smile");
    //       emojiElement.style.color = "#337357";
    //     }
    //   }
    //   updateEmojiClass(temperature);

  }
}


// navbar
function toggleActiveClass(element) {
  var myList = document.getElementById("myList");
  var listItems = myList.getElementsByTagName("li");

  // Menonaktifkan class "active" dari semua elemen <li>
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].getElementsByTagName("a")[0].classList.remove("active");
  }

  // Mengaktifkan class "active" pada elemen yang diklik
  element.classList.add("active");
}