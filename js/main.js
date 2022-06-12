const app = new Vue ({
    el: '#app',
    data: {
        open: false,
        buttonActive: false,//ボタンを非表示にしておく
        scroll: 0,
        name: '',
        phone: '',
        email: '',
    },
    computed: { //関数定義
        isValidName() {
            return this.name.length < 2
        },
        isValidPhone() {
            return this.phone.length < 8
        },
        isValidEmail() {
            const regex = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)
            return !regex.test(this.email);
        }
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

