let image = document.getElementById('images');
let us = ['usedtools/firma.jpg','usedtools/plakat.jpg']
    setInterval(()=>{
        let random = Math.floor(Math.random() * 2);
          console.log(random);
         console.log(Math.random());
        image.src = us[random];
    }, 5000);   