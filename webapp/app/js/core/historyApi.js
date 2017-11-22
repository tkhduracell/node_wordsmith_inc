export default class HistoryApi {
  constructor (_fetch) {
    this.fetch = _fetch || window.fetch.bind(window)
  }

  call () {
    return this.fetch('api/history')
      .then((resp) => resp.json())
  }
}
