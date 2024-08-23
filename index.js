






function submitInfo(){

const box1V = document.getElementById("inputBox1").value;
const box2V = document.getElementById("inputBox2").value;
const box1 = document.getElementById("inputBox1");
const box2 = document.getElementById("inputBox2");
const box3 = document.getElementById("inputBox3");
const box4 = document.getElementById("inputBox4");
const inputs = document.querySelectorAll(".input");
const disBox1 = document.getElementById("firstName");
const disBox2 = document.getElementById("lastName");
const disBox3 = document.getElementById("emailAddress");
const disBox4 = document.getElementById("password");

let allFilled = true;


    inputs.forEach((input, index) => {
        if (input.value.trim() === ""){
            allFilled = false;
            switch (index){
                case 0:
                    disBox1.style.display = "flex";
                    box1.style.borderColor = "red";
                    box1.style.backgroundImage = 'url("images/icon-error.svg")';
                    break;

                case 1:
                    disBox2.style.display = "flex";
                    box2.style.borderColor = "red";
                    box2.style.backgroundImage = 'url("images/icon-error.svg")';
                    break;

                case 2:                  
                    disBox3.style.display = "flex";
                    box3.style.borderColor = "red";
                    box3.placeholder = "email@example/com";
                    box3.classList.add("invalid")
                    box3.style.backgroundImage = 'url("images/icon-error.svg")';
                    break;

                case 3:
                    disBox4.style.display = "flex";
                    box4.style.borderColor = "red";
                    box4.style.backgroundImage = 'url("images/icon-error.svg")';
                    break;
        } 
    }   else {
             switch(index){
                case 0: 
                    disBox1.style.display  =  "none";
                    box1.style.borderColor = "";
                    box1.placeholder.textContent = "First name";
                    box1.style.backgroundImage = "none";  
                    break;

                case 1:     
                    disBox2.style.display  =  "none";
                    box2.style.borderColor = "";
                    box2.placeholder.textContent = "Last name";
                    box2.style.backgroundImage = "none";  
                    break;

                case 2: 
                if (input.value.trim().includes ('@') && 
                     input.value.trim().includes('.com')){
                    disBox3.style.display  =  "none";
                    box3.style.borderColor = "";
                    box3.placeholder = "email@example/com";
                    box3.classList.remove("invalid");
                    box3.style.backgroundImage = "none"; 
                }
                else {
                    disBox3.style.display = "flex";
                        box3.style.borderColor = "red";
                        box3.classList.add("invalid");
                        box3.style.backgroundImage = 'url("images/icon-error.svg")';
                        allFilled = false; 
                }
                    break;
                
             
                case 3:
                    disBox4.style.display  =  "none";
                    box4.style.borderColor = "";
                    box4.placeholder.textContent = "Password";
                    box4.style.backgroundImage = "none";
                    break; 
                    
    

        }
    }    
});
        if(allFilled) {   
                        disBox1.style.display  =  "flex";
                        disBox1.style.color = "green";
                        disBox1.textContent = `Hello ${box1V + " " + box2V}`;

                        disBox2.style.display  = "flex";
                        disBox2.style.color = "green";
                        disBox2.textContent = "Last name accepted"
     
                        disBox3.style.display  = "flex";
                        disBox3.textContent = `Email accepted`;
                        disBox3.style.color = "green";
            
                        disBox4.style.display  = "flex";
                        disBox4.textContent = "Password accepted";
                        disBox4.style.color = "green";
            }
        }
   