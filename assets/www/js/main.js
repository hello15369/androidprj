
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: '3학년 1반 칭구들' },
      { text: '맛집 탐방 동아리' },
      { text: '융소 설계' }
    ]
  }
})
