var app = new Vue({
	el: '#app',
  data: {
  	message: 'Hello,Vue.js!',
    basePrice: 100
  },
  computed:{
  	reversedMessage: function() {
    	return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
    	get: function() {
      	return parseInt(this.basePrice * 1.08)
      },
      set: function(taxIncludedPrice){
      	this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
      }
    },
    computedNumber: function() {
    	return Math.random()
    }
  },
  methods:{
  	reversedMessageMethod: function(){
    	return this.message.split('').reverse().join('')
    },
    methodsNumber: function() {
    	return Math.random()
    }
  }
 })
 
 //算出プロパティcomputedとは、関数によって算出したデータを返すことができるプロパティ
 
 //算出プロパティvsメソッド
 //conputed:()不要　methods:()必要
 //computed:getter,setter  methods:getter
 //computed:キャッシュされる　methods:キャッシュされない