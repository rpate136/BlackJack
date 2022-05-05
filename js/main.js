function cardValue(){
    
    //const value = document.getElementById("cardValue")    
    
    const value = "5"
    const suit = "&spades"
    
    document.getElementsByClassName("card rank-6 spades").innerHTML = `card rank-${value} spades`;
    //document.getElementsId("rank1").innerHTML = `${value}`;
    //document.getElementsId("suit1").innerHTML = suit;
    document.getElementsId("change").innerHTML = value;

}

