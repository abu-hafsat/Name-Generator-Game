const input1 = document.getElementById("first-input");
const input2 = document.getElementById("second-input");
const buttons = document.getElementsByClassName('btn');
const answ1 =  document.getElementById('win-1');
const answ2 =  document.getElementById('win-2');
const answ3 =  document.getElementById('win-3');
const refbutton =  document.getElementById('refresh');
const myaudio = document.getElementById('audio');
const deletebtn = document.getElementById('delete');
const resetbtn = document.getElementById('reset');

const names = ['FATIMA', 'HAFSAT', 'AISHA', 'MUSA',
               'SANI', 'SALIS', 'HASSANA', 'ZARA', 'KHADIJA', 'ALIYU'];

const Alphabets = ['F', 'A', 'T', 'I', 'M', 'H', 'S', 'U', 'N', 'L', 'Z', 
                    'R', 'K', 'D', 'J', 'Y'];


currentValue1 = "";

for (i = 0; i < buttons.length; i++) { 
  const button = buttons[i];  
  button.addEventListener("click", function() {
    const value = button.innerHTML;
    currentValue1 += value;
    input1.value = currentValue1;

    if(input1.value == input2.value ) {
      answ1.innerText = input2.value
      answ1.style.backgroundColor = "lightgray";

      currentValue1 = "";
      input1.value = currentValue1;

      let random1 = RandomNames();
      input2.value = names[random1];
      playaudio();

    } }
)}
    const RandomNames = () => {
        return Math.floor(Math.random() * names.length);
    }
    let random1 = RandomNames();
input2.value = names[random1];

for(i = 0; i < buttons.length; i++) {
  const button = buttons[i];
 const RandomAlph = () => {
  return Math.floor(Math.random() * Alphabets.length);
 }
 let random2 = RandomAlph();
 button.innerHTML = Alphabets[random2];

refbutton.addEventListener('click', function () {
  let random2 = RandomAlph();
  button.innerHTML = Alphabets[random2];
})


resetbtn.addEventListener("click", function () {
  currentValue1 = "";
   input1.value = currentValue1;
  let random1 = RandomNames();
  input2.value = names[random1];
  let random2 = RandomAlph();
  button.innerHTML = Alphabets[random2];
})

deletebtn.addEventListener("click", function () {
  currentValue1 = "";
   input1.value = currentValue1;
})
}

function delay () {
  return answ1.style.display = 'none';
}

const playaudio = () => {
  return myaudio.play();
}



