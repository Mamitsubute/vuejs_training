Vue.component('hello-component',{
	template: '<p>Hello</p>'
})

var app = new Vue({
  el: '#app',
  data: {
  	languages:[
    	'Javascript',
      'Ruby',
      'Python'
    ],
  	toggle: true,
  	url: 'https://jp.vuejs.org/',
  	message: 'hello,Vue.js!',
  	now: '時間でるよ',
    user: {
    	firstName: 'Taro',
      lastName: 'Yamada',
      age: 28
    }
  },
  methods:{
  	onclick: function(){
    	// alert('onclick');
      this.now = new Date().toLocaleString();
    }
  }
})
