import SearchModel from './models/SearchModel.js'

new Vue({
  el: '#app',
  data: {
    query: '',
    submitted: false,
    searchResult: [],
    tabs:['추천 검색어', '최근 검색어']
  },

  //created => 뷰 인스턴스가 생성될때 실행되는 함수
  created(){
    this.selectedTab = this.tabs[0]
  },
  methods: {
    onSubmit(e) {
      this.search()
    },
    onKeyup(e) {
      if (!this.query.length) this.resetForm()
    },
    onReset(e) {
      this.resetForm()
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true
        this.searchResult = data
      })
    },
    resetForm() {
      this.query = ''
      this.submitted = false
      this.searchResult = []
    }
  }
})