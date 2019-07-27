var app = new Vue ({
	el: '#app',
  data: {
    items: null,
    keyword: '',
    message: ''
  },
  watch: {
    keyword: function(newKeyword, oldKeyword) {
      // console.log(newKeyword)
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }

  },
  created: function() {
    // this.keyword = 'JavaScript'
    // this.getAnswer()
    //APIリクエストを間引くことができる
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer: function() {
      if (this.keyword === '') {
        this.items = null
        this.message = ''
        return
      }

      this.message = 'loading...'
      //axiosでvueインスタンスのプロパティにアクセスするため、ローカル変数にin
      var vm = this
      //パラメータをkey valueの形で (１ページ目を表示、１ページあたり２０件表示、)
      var params = { page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
      .then(function(response) {
        console.log(response)
        vm.items = response.data
      })
      .catch(function(error){
        vm.message = 'Error!' + error
      })
      .finally(function(){
        vm.message = ''
      })
    }
  }
})

//このセクションの目的
//監視プロパティ（ウォッチャ）の理解を深める