export default class ReverseApi {
  constructor (_fetch) {
    this.fetch = _fetch || window.fetch.bind(window)
  }

  call (content) {
    return this.fetch('api/reverse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content})
    })
    .then((resp) => resp.json())
  }
}
