Mainmenu = Vue.component("mainmenu", {
    template: `<h1>hello</h1>`,
    mounted: function () {
        peleServices.request("ddd", {
            d: 2
        });
    }
});