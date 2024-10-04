document.addEventListener('DOMContentLoaded', function(){
  const tds = document.querySelectorAll("td");
  let solution = ""
  tds.forEach((td, index) => {
      td.addEventListener('click', function () {
        
        if (this.innerHTML == "="){
          try {
            document.getElementById("solution").innerHTML = 
            eval(solution);
          }
          catch(err) {
            console.log(err.message);
            document.getElementById("solution").innerHTML = "Give proper values";
          }
          
        } else if (this.innerHTML == "C"){
          document.getElementById("operation").innerHTML = "";
          solution = ""
          document.getElementById("solution").innerHTML = 0
        } else{
          
          if (this.className == "operator"){
            document.getElementById("operation").innerHTML += "&nbsp;" + this.innerText + "&nbsp;"
          } else {
          document.getElementById("operation").innerHTML += this.innerText;
          }
          console.log(this.className)
          solution += this.id;
          console.log(solution);
        }
    });
  });
});
