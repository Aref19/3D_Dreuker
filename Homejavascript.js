let image = document.getElementById('images');
let us = ['usedtools/firma.jpg','usedtools/plakat.jpg']
    setInterval(()=>{
        let random = Math.floor(Math.random() * 2);
          console.log(random);
         console.log(Math.random());
        image.src = us[random];
    }, 3000); 
    
    

    function phon(){
    let ruf= document.getElementById("nummer");
    ruf.style.backgroundColor="white";
    ruf.style.visibility="visible";
    console.log("aref");
      setInterval(()=>{
        ruf.style.visibility="hidden";
        console.log("aref")

      },5000)

    
    };
    function suche(){
        let ruf= document.getElementById("suche");
        ruf.style.backgroundColor="white";
        ruf.style.visibility="visible";
        console.log("aref");
          setInterval(()=>{
            ruf.style.visibility="hidden";
            console.log("aref")
    
          },30000)
        };
       function dropDown(){
        document.getElementById("myDropdown").classList.toggle("show");
        console.log("aref")
       }