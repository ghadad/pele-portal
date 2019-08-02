class PeleSrvices {
    constructor(options) {
        this.env = "DV";
        this.name = "PeleServices";
        this.url = `https://msso.pelephone.co.il/${this.env}/REST/GetUserModuleTypes`;
    }
    getName() {
        return "PeleSrvices";
    }

    request(service, data) {
        return;
        return axios.post(this.url, data, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "VERSION": "1"
            }
        });
    }

}

let peleServices = Vue.prototype.$peleSrvices = new PeleSrvices();