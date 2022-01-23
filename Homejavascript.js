 
    
    

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