import '../../../dist/vue.js'

export default Vue.component('MyTest', {
    template: '<h1>哈哈</h1>',
    beforeCreate() {
        console.log('child-beforeCreate');
    },
    created() {
        console.log('child-created');
    },
    beforeMount() {
        console.log('child-beforeMount');
    },
    mounted() {
        console.log('child-mounted');
    },
})