document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app!')


  const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        history: '<p class="subtitle">Nothing here yet,,, run a paragraph first.</p>'
      }
  })

})
