function szamitas(testsúly, magasság) {
    let BMI = testsúly / (magasság / 100) ** 2
    return Math.round(BMI * 100) / 100
}

let gomb =  document.getElementById("szamitas")
gomb.addEventListener("click", function () {
    let testsúly = parseInt(document.getElementById("bevitelkg").value)
    let magasság = parseInt(document.getElementById("bevitelcm").value)
    document.getElementById("bmiertek").textContent = "Az ön BMI értéke: "+ szamitas(testsúly, magasság)

    if(szamitas(testsúly, magasság) < 18.4) {
        document.getElementById("elso").style.backgroundColor = "#ff4500";
        document.getElementById("elso").style.color = "white";
    } else if(szamitas(testsúly, magasság) >= 18.5 && szamitas(testsúly, magasság) < 24.9) {
        document.getElementById("masodik").style.backgroundColor = "#ff4500";
        
    }else if(szamitas(testsúly, magasság) >= 25 && szamitas(testsúly, magasság) <= 29.9) {
        document.getElementById("harmadik").style.backgroundColor = "#ff4500";
        
    } else if(szamitas(testsúly, magasság) >= 30 && szamitas(testsúly, magasság) <= 34.9) {
        document.getElementById("negyedik").style.backgroundColor = "#ff4500";

    } else if(szamitas(testsúly, magasság) >= 35 && szamitas(testsúly, magasság) <= 39.9) {
        document.getElementById("ötödik").style.backgroundColor = "#ff4500";

    } else if(szamitas(testsúly, magasság) >= 40 ) {
        document.getElementById("hatodik").style.backgroundColor = "#ff4500";

    } else {

    }
})