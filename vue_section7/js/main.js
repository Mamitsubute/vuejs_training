var app = new Vue ({
	el: '#app',
  data: {
  	firstName: '',
    lastName: '',
    /* fullName: '' */
  },
//監視プロパティでの書き方（非推奨）
/*   watch: {
    firstName: function(value) {
      this.fullName = value + ' ' + this.lastName
    },
    lastName: function(value) {
      this.fullName = value + ' ' + this.firstName
    }
  } */
  // 算出プロパティでの書き方
  computed: {
  	fullName: function(){
    	return this.firstName + ' ' + this.lastName
    }
  }
})

//算出プロパティvs監視プロパティ→算出プロパティの利用推奨
//理由：シンプルに記述できるため
//監視プロパティのオプション
//deep:ネストされたオブジェクトも監視
//immediate:初期読み込み時にも呼び出す