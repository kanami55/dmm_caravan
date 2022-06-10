const app = new Vue ({
    el: '#app',
    data: {
        open: false,
        buttonActive: false,//ボタンを非表示にしておく
        scroll: 0
    },
    mounted() {
        window.addEventListener('scroll',this.scrollWindow)
    },
    methods: {
        pageTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        scrollWindow() {
            const top = 100
            this.scroll = window.scrollY //垂直方向
            if (top <= this.scroll) {
                this.buttonActive = true
            } else {
                this.buttonActive = false
            }
        } 
    }
})

