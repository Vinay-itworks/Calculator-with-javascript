document.addEventListener('DOMContentLoaded', function(){
  const tds = document.querySelectorAll("td");
  let solution = ""
  tds.forEach((td, index) => {
      td.addEventListener('click', function () {
        
        if (this.innerHTML == "="){
          document.getElementById("solution").innerHTML = 
            eval(solution);
        } else if (this.innerHTML == "C"){
          document.getElementById("operation").innerHTML = "";
          solution = "0"
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
