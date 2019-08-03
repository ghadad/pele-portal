Mainmenu = Vue.component("mainmenu", {
    template: `<div><h1>hello</h1>
    <component v-if="$route.params.comp" v-for="cmp of ui[$route.params.comp].componenets" :is="cmp"  :data="data">
    <h2>{{ui.hr_807.title}}</h2><slot></slot></component>
   
    {{$route.params}}</div>`,
    data: function () {
        return {
            data: {
                dd: 2,
                title: ui.hr_807.title,
                router: this.$route.params
            },
            ui: ui,

        }
    },
    mounted: function () {
        peleServices.request("ddd", {
            d: 2,
        });
    },
    computed: {
        router: function () {
            return this.$route;
        }
    }
});