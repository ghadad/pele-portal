class PeleSrvices {
    constructor(options) {
        this.name = "PeleServices"
    }
    getName() {
        return "PeleSrvices";
    }



}

Vue.prototype.$peleSrvices = new PeleSrvices();