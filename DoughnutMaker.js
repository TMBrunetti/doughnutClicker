class dohnutClass{
    constructor(numberOf) {
        this._numberOf = numberOf;
        this._autoCost = 100;
        this._multiCost = 10;
        this._clickValue = 1;
        this._numOfAuto = 0;
        this._numOfMulti = 0;
    }

    dohnutClass

    get numberOf() {
        return this._numberOf
    }

    getStatus(){
        return "You have made "+ Math.round(this._numberOf) + " Rad-Tastic DohNuts!"  + "\n" + "\n" +
        " Each Click is worth a Whopping value of  "+ this._clickValue +" We exact out herrrr" + "\n" + "\n" +
         "Your current cost of laziness/auto clickah is "+ Math.ceil(this._autoCost) +" DohNutzizzles" + "\n"+ "\n" +
         " and Multipli-ahs cost due to rising inflation is "+Math.ceil(this._multiCost) + " Dohnutz" + "\n" + "\n" +
         " you have made it rain on " + this._numOfMulti + " Multipli-ahs and "+ this._numOfAuto + " AutoClickahs";      
    }

    getStatusDisplay(){()=>
        setInterval(this.getStatus,500)      
    }

    make() {
       this._numberOf += this._clickValue;

    }

    reset(){
        location.reload();
       
    }

}

export default dohnutClass


