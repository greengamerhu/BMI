function szamitas(testsúly, magasság) {
    let BMI = testsúly / (magasság / 100) ** 2
    return BMI
}
function reset() {
    document.getElementById("elso").style.backgroundColor = "white";
    document.getElementById("elso").style.color = "black";
    document.getElementById("masodik").style.backgroundColor = "white";
    document.getElementById("masodik").style.color = "black";
    document.getElementById("harmadik").style.backgroundColor = "white";
    document.getElementById("harmadik").style.color = "black";
    document.getElementById("negyedik").style.backgroundColor = "white";
    document.getElementById("negyedik").style.color = "black";
    document.getElementById("ötödik").style.backgroundColor = "white";
    document.getElementById("ötödik").style.color = "black";
    document.getElementById("hatodik").style.backgroundColor = "white";
    document.getElementById("hatodik").style.color = "black";
    
}

let gomb =  document.getElementById("szamitas")
gomb.addEventListener("click", function () {
    let testsúly = parseInt(document.getElementById("bevitelkg").value)
    let magasság = parseInt(document.getElementById("bevitelcm").value)
    let eredmeny = Math.round(szamitas(testsúly, magasság) * 100) / 100 
    console.log(eredmeny * (magasság / 100) ** 2)
    let idealis = eredmeny * ((magasság / 100) ** 2)
    let min = 18.5 * (magasság / 100) ** 2 
    let max = 24.99 * (magasság / 100) ** 2 
   

    reset();
    document.getElementById("ideal").textContent = "Ideális Testömege: " + Math.round(idealis * 100) / 100  +" kg"
    document.getElementById("bmiertek").textContent = "Az ön BMI értéke: "+ eredmeny
    document.getElementById("kivanatos").textContent =   Math.round(min * 100) / 100 + "-" +  Math.round(max * 100) / 100 

    if(eredmeny < 18.4) {
        document.getElementById("elso").style.backgroundColor = "#f3953e";
        document.getElementById("elso").style.color = "white";
    } else if(eredmeny >= 18.5 && eredmeny <= 24.9) {
        document.getElementById("masodik").style.backgroundColor = "#f3953e";
        document.getElementById("masodik").style.color = "white";
    } else if(eredmeny >= 25 && eredmeny <= 29.9) {
        document.getElementById("harmadik").style.backgroundColor = "#f3953e";
        document.getElementById("harmadik").style.color = "white";

        
    } else if(eredmeny >= 30 && eredmeny <= 34.9) {
        document.getElementById("negyedik").style.backgroundColor = "#f3953e";
        document.getElementById("negyedik").style.color = "white";


    } else if(eredmeny >= 35 && eredmeny <= 39.9) {
        document.getElementById("ötödik").style.backgroundColor = "#f3953e";
        document.getElementById("ötödik").style.color = "white";

    } else if(eredmeny >= 40 ) {
        document.getElementById("hatodik").style.backgroundColor = "#f3953e";
        document.getElementById("hatodik").style.color = "white";


    } 
})