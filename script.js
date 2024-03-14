var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];



function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Harap Isi Data Dengan Benar`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan Berat Badan, kondisi ini terjadi ketika seseorang memiliki berat badan di bawah rentang normal pada orang seusianya. Kondisi ini perlu segera ditangani dengan tepat.';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Normal (ideal). Tetap jaga pola makan yang sehat dan jangan lupa untuk tetap berolahraga.';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Kelebihan Berat Badan, kondisi ini melebihi berat badan normal pada umumnya. Tingkatkan konsumsi sayuran dan buah-buahan serta rutin berolahraga';
     }else if(30<=bmi){
    result = 'Kegemukan (obesitas), yaitu kondisi kronis yang ditandai dengan penumpukan lemak dalam tubuh. Anda memiliki kandungan lemak di atas normal sehingga berimbas pada risiko penyakit yang lebih serius bahkan mengancam jiwa.';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Kamu <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
