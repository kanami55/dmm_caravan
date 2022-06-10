const app = new Vue ({
    el: '#app',
    data: {
        open: false
    },
    methods: {
        pageTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }  
    }
})

