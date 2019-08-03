Mainmenu = Vue.component("mainmenu", {
    template: `<div><h1>hello</h1>
    <component v-for="cmp of ui.hr_807.componenets" :is="cmp"  :data="data">
    <h2>{{ui.hr_807.title}}</h2><slot></slot></component>
    <component v-for="cmp of ui.hr_242.componenets" :is="cmp"  :data="data">
    <h2>{{ui.hr_242.title}}</h2><slot></slot></component></div>`,
    data: function () {
        return {
            data: {
                dd: 2,
                title: ui.hr_807.title
            },
            ui: ui,

        }
    },
    mounted: function () {
        peleServices.request("ddd", {
            d: 2
        });
    }
});