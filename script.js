class Message{
    constructor(authorName, sendingDate, text){
        this.authorName = authorName;
        this.sendingDate = sendingDate;
        this.text = text;
    }
    toString(){ 
        console.log(String(this.authorName + " " + this.sendingDate + " " + this.text))
    }
}

let message1 = new Message("Adil", "10:21" , "ilk mesaj" );
message1.toString();



class Messenger extends Message{
    constructor(authorName, sendingDate, text){
        super(authorName, sendingDate, text)
    }
    show_history(){ 
        console.log(this.sendingDate + " " + this.authorName + ": " + this.text);
    }
    send(authorName, text){
        this.authorName = authorName;
        this.text = text;
        console.log(this.sendingDate + " " + this.authorName + ": " + this.text);
    }
}



let message2 = new Messenger("Meryem", "10:21" , "ikinci mesaj" );
message2.show_history();
message2.send("Arif", "yeni mesaj")

