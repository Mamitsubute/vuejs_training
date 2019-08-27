var app = new Vue ({
	el: '#app',
  data: {
  	isLarge: true,
    hasError: true,
    largeClass: 'large',
    dangerClass: 'text-danger',
    classObject: {
    	large: true,
      'text-danger': true
    },
    largeClass2: {
    	large: true,
      'bg-gray': true
    },
    dangerClass2: {
    	'text-danger': true,
    },
    isLarge2: true,
    color: 'red',
    fontSize: 36,
    styleObject: {
    	color: 'purple',
      fontSize: '52px'
    }
  },

})