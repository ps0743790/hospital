let slide = document.querySelectorAll(".patientCard");
let card3 = document.querySelectorAll(".card3");
let card1 = document.querySelectorAll(".card1");
let card2 = document.querySelectorAll(".card2");
let closeBtn = document.getElementById("close");
let connectBtn = document.getElementById("connectBtn")

let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 99}%)`
    })
}

setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun();
}, 2000)


card3.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards.firstElementChild.src);
        document.querySelector(".content").style.display="block"
       document.querySelector(".contentDetail").innerHTML=`
        <img src=${cards.firstElementChild.src}>
        <div>
            <h1>Dr Priya</h1>
            <h4> Doctor Details Information: </h4>
             <h4> Name:priya </h4>
             <h4> Gender:female</h4>
             <h4> Date of Birth: 05/06/1998</h4>
             <h4> Contact Information: </h4>
             <h4>Address: </h4>
             <h4> Phone:01365456 </h4>
             <h4> Email:pds@gmail.com </h4>

            </br>
            <div class="pro-links" >
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>

        </div>
        </div>

        `
        closeBtn.addEventListener("click", function(){
            document.querySelector(".content").style.display="none"

        })
    })

    card1.forEach(function(vists){
        vists.addEventListener("click", function(){
            console.log(cards.firstElementChild.src);
            document.querySelector(".content").style.display="block"
           document.querySelector(".contentDetail").innerHTML=`
            <img src=${vists.firstElementChild.src}>
            <div>
                <h1>Dr Neha</h1>
                
                <div>
           
            <h4> Doctor Details Information: </h4>
             <h4> Name:neha </h4>
             <h4> Gender:femal</h4>
             <h4> Date of Birth:05/06/1998 </h4>
             <h4> Contact Information: </h4>
             <h4>Address: </h4>
             <h4> Phone:13164646 </h4>
             <h4> Email:pre@gmail.com </h4>

            </br>
            <div class="pro-links" >
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>

        </div>
        </div>            
    
            `
            closeBtn.addEventListener("click", function(){
                document.querySelector(".content").style.display="none"
    
            })
        })
    })

    card2.forEach(function(conn){
        conn.addEventListener("click", function(){
            console.log(cards.firstElementChild.src);
            document.querySelector(".content").style.display="block"
           document.querySelector(".contentDetail").innerHTML=`
            <img src=${conn.firstElementChild.src}>
            <div>
                <h1>Dr Swati</h1>
                
                <div>
            
            <h4> Doctor Details Information: </h4>
             <h4> Name:swati </h4>
             <h4> Gender:female</h4>
             <h4> Date of Birth:02/11/1996 </h4>
             <h4> Contact Information:023546666 </h4>
             <h4>Address: </h4>
             <h4> Phone: </h4>
             <h4> Email: </h4>

            </br>
            <div class="pro-links" >
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>

        </div>
        </div>           
    
            `
            closeBtn.addEventListener("click", function(){
                document.querySelector(".content").style.display="none"
    
            })
        })
    })
    
})


connectBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value ==  ""){
        alert("Please Enter Detail")
    }else{
        alert("You Logged In")
        email.value="";
        pass.value="";

    }

})