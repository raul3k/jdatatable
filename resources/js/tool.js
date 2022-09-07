import Vue from 'vue'

Nova.booting((Vue, router, store) => {
    const Swal = require('sweetalert2');
    Vue.component('Swal', Swal);


    Vue.component('jdatatable', require('./components/Tool').default)
});
