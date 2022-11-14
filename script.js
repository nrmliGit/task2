class Message{
    gettime() {
        let currentTime = new Date();
        return `${currentTime.getHours()}:${currentTime.getMinutes()}`
    }
    constructor(authorName, text){
        this.authorName = authorName;
        this.sendingDate =this.gettime();
        this.text = text;
    }
    toString(){ 
        console.log(String(this.authorName + " " + this.sendingDate + " " + this.text))
    }
    toHTML(){
        let x=`<p>${this.sendingDate} ${this.authorName}: ${this.text}</ p>`
    }
}

let message1 = new Message("Adil", "ilk mesaj" );
message1.toString();



var arr = [];
class Messenger extends Message{
    constructor(authorName, sendingDate, text){
        super(authorName, sendingDate, text)
    }
    show_history(){ 
        arr.forEach(
            function(value){
                console.log(value.sendingDate+" "+ value.authorName+ " " +value.text) 
            }
        )
    }
    send(authorName, text){
        let newMessage = new Message(authorName,text)
      arr.push(newMessage)
    }
}



let messenger1 = new Messenger();

messenger1.send('Adil', 'ilk mesaj')
messenger1.send('Meryem', 'ikinci mesaj')

messenger1.show_history()