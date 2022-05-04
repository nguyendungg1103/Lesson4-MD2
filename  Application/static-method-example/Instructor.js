class Intructor {
    constructor({ name, role = "assistant" } = {}) {
        this.role = role;
        this.name = name;
    }
    renderDetails(){
        console.log(`${this.role} ${this.role}`);
    }
    static HelloWorld(){
        console.log("hi here")
    }
    static CanTeach(Intructor){
        return Intructor.role === "hhghg"

    }

}
Intructor.HelloWorld()

let junniorIntructor = new Intructor({name:"brinf"});
let senjunniorIntructor = new Intructtor({name:"alib",role:"hhghg"});
junniorIntructor.renderDetails()
senjunniorIntructor.renderDetails()

