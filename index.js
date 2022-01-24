const cardsList = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cardsList, event = "surprise"){
    const messagesForCards = [];
    for (let i=0; i < cardsList.length; i++){
        messagesForCards[i] = `Thank you, ${cardsList[i]}, for the wonderful ${event} gift!`;
    }
    return messagesForCards;
}

function countDown(int){
    while (int >= 0){
        console.log(int);
        int--;
    }
}