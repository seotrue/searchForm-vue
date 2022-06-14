//el: e돔에서  어떤 샐러터에 마운팅 될지

new Vue({
  el: '#app',
  data: {
    query: 'sss'
  },
  methods: {
    onSubmit(e) {
      debugger
    },
    onReset(){
      this.query = ''
      // todo  검색 결과 숨기기
      debugger
    },
    onKeyup(){
      //if(!this.query.length) this.onReset()
    }
  }
})