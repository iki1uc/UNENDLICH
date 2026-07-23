class UNENDLICH {

    constructor(){
        this.start = 0;
        this.step = 0;
        this.loop = [];
    }

    set(start, step){
        this.start = start;
        this.step = step;
    }

    compute(count = 81){
        this.loop = [];
        let v = this.start;

        for(let i=0; i<count; i++){
            v = (v + this.step) % 999999;
            this.loop.push(v);
        }

        return {
            start: this.start,
            step: this.step,
            loop: this.loop
        };
    }
}

window.UNENDLICH = new UNENDLICH();
