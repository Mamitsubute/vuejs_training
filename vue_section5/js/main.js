Vue.filter('readMore', function(text,length,suffix){
	return text.substring(0,length) + suffix
})

Vue.filter('numberFormat',function(value){
	return value.toLocaleString()
})

Vue.filter('toUSD',function(jpy){
	return jpy / 100
})

var app = new Vue({
	el: '#app',
  data: {
  	message: 'Hello Vue.js',
    html_message: '<span style="color:red;">Hello Vue.js</span>',
    cloak_message: 'Hello,Vue.js!',
    vtext_message: 'YEAH',
    number: 100,
    ok: true,
    price: 29800000,
    jpyPrice: 29800,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce ut placerat orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.',
    url: 'https://google.com'
  },
  methods: {
    clickHandler: function(event) {
      // alert('onclick');
      this.message = this.message.split('').reverse().join('')
    }
  },
/*   filters: {
    numberFormat: function(value) {
      return value.toLocaleString()
    }
  } */
})

//v-once 初回のみテンプレートを評価、それ以降は静的なコンテンツ化。
//描画更新のスピードをあげたいときに使う

//v-pre 要素と全ての子要素のコンパイルをスキップ
//あまり使わなそうなので、スルー

//v-html プレーンなHTMLを挿入したい→指定した要素のinnerHTMLを更新できる
//注意：XSS脆弱性を引き起こす恐れあり、サービスを利用するユーザが入力したコンテンツには絶対に使用しない！

//v-cloak 覆い隠すという意
//ページを表示開始してから、インスタンスの作成が終わるまでの間に	、マシュタッシュタグなどコンパイル前のテンプレートが表示されてしまうのを防ぐ
//インスタンスのコンパイルが終了するまで非表示にしたい要素にv-cloakディレクティブを設定する

//v-text マシュタッシュの代わりにディレクティブを使いたい
//マシュタッシュに統一するのがおすすめ。v-textは配下のテキストを丸ごと置き換え。一部を書き換えたいときはマシュタッシュを使うことになるため

//javascript式
//各バインディングは、単一式のみを含むことができる

//ローカルフィルタ
// {{ 式 ｜ フィルタの名前 }}

//グローバルフィルタ
//Vue.filter(フィルタ名,フィルタの動作)

//フィルタは複数連結できる！
//例　{{ jpyPrice | toUSD | numberFormat }}

//v-bind省略記法
//完全 <a v-bind:href="url">Link</a>
//省略 <a :href="url">Link</a>