var app = new Vue ({
    el: '#app',
    data: {
        open: false
    },
    method: {
        scrollTop: function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }

})

