//var typed = new Typed('.typing',{
  //  strings:["", "Tezukatado", "HankKun", "Djakon"],
    //typespeed:100,
    //backspeed:60,
    //loop:true
//})

const nav = document.querySelector(".nav"),
      navlist = nav.querySelector("li"),
      totalNavList = navlist.length;
      for(let i=0; i<totalNavList; i++)
    {
        const a= navlist[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let j=0; j<totalNavList; j++){
                navlist[j].querySelector("a").classList.remove("active");
            }
           this.classList.add("active")
         })
    }



