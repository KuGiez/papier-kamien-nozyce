let wygrana = 0
let przegrana = 0
let remis = 0

function gra(wybor) {
    // alert(wybor)
    let wyborkomputera = Math.floor(Math.random()* 3) +1
    let wyborGracza = wybor
    // alert(wyborGracza)

    switch(wyborkomputera){
        case 1:
            wyborkomputera='k'
                break
        case 2:
            wyborkomputera='p'
                break
        case 3:
            wyborkomputera='n'
                break
    }
    // alert(wyborkomputera)
    
    if(wyborkomputera == wyborGracza){
        document.getElementById("wynik").innerHTML = "A więc mamy remis"
        remis++
        
    }
    if(wyborGracza == 'k' && wyborkomputera == 'n'){
        document.getElementById("wynik").innerHTML = "Kamień wyszczerbił nożyce. Wygrałeś"
        wygrana++
           


    }
    if(wyborGracza == 'k' && wyborkomputera == 'p'){
        document.getElementById("wynik").innerHTML = "Kamień został owinięty papierem. Przegrałeś"
        przegrana++
        

    }
    if(wyborGracza == 'n' && wyborkomputera == 'p'){
        document.getElementById("wynik").innerHTML = "Nożyce pocięły papier. Wygrałeś"
        wygrana++
            

    }
    if(wyborGracza == 'n' && wyborkomputera == 'k'){
        document.getElementById("wynik").innerHTML = "Nożyce wyszczerbiły się o kamień. Przegrałeś"
        przegrana++
       

    }
    if(wyborGracza == 'p' && wyborkomputera == 'n'){
        document.getElementById("wynik").innerHTML = "Papier został pocięty przez nożyce. Przegrałeś"
        przegrana++
           
    }
    if(wyborGracza == 'p' && wyborkomputera == 'k'){
        document.getElementById("wynik").innerHTML = ("Papier owinął kamień. Wygrałeś");
        wygrana++
            
    }
    

    document.getElementById("wygrane").innerHTML = "Wygrane: " + wygrana.toString()
    document.getElementById("remisy").innerHTML = "Remisy: " + remis.toString()
    document.getElementById("przegrane").innerHTML = "Przegrane: " + przegrana.toString() 
}