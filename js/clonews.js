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
  } else if (type === 'rainfall') {
    icon.className = 'fa-solid fa-cloud-rain';
    infoValue.textContent = '__ mm';
    data1.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase">> 8 mm </span> <span>High</span>';
    data2.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> 2 mm - 8 mm </span> <span>Normal</span>';
    data3.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> < 2 mm </span> <span>Low</span>';
  } else if (type === 'windSpeed') {
    icon.className = 'fa-solid fa-fan';
    infoValue.textContent = '__ m/s';
    infoValue.style.textTransform = 'lowercase';
    data1.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase">> 9 m/s </span> <span>High</span>';
    data2.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> 4 m/s - 9 m/s </span> <span>Normal</span>';
    data3.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> < 4 m/s </span> <span>Low</span>';
  } else if (type === 'windDirection') {
    icon.className = 'fa-solid fa-wind';
    infoValue.textContent = '__';
    data1.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> -- </span> <span>High</span>';
    data2.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> -- </span> <span>Normal</span>';
    data3.innerHTML = '<span style="font-weight: normal; font-family: Poppins, sans-serif; text-transform: lowercase"> -- </span> <span>Low</span>';
  }
}