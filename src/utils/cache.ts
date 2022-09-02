class Cache {
  setStrCache(key: string, value: string, sessionStorage?: boolean) {
    if (sessionStorage) {
      window.sessionStorage.setItem(key, value)
    } else {
      window.localStorage.setItem(key, value)
    }
  }
  setNumCache(key: string, value: string, sessionStorage?: boolean) {
    if (sessionStorage) {
      window.sessionStorage.setItem(key, value)
    } else {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  setCache(key: string, value: any, sessionStorage?: boolean) {
    if (sessionStorage) {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } else {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  getStrCache(key: string, sessionStorage?: boolean) {
    if (sessionStorage) {
      return window.sessionStorage.getItem(key)
    } else {
      return window.localStorage.getItem(key)
    }
  }
  getNumCache(key: string, sessionStorage?: boolean) {
    if (sessionStorage) {
      return JSON.parse(window.sessionStorage.getItem(key) || '')
    } else {
      return JSON.parse(window.localStorage.getItem(key) || '')
    }
  }

  getCache(key: string, sessionStorage?: boolean) {
    if (sessionStorage) {
      return JSON.parse(window.sessionStorage.getItem(key) || '')
    } else {
      return JSON.parse(window.localStorage.getItem(key) || '')
    }
  }
  removeCache(key: string, sessionStorage?: boolean) {
    if (sessionStorage) {
      window.sessionStorage.removeItem(key)
    } else {
      window.localStorage.removeItem(key)
    }
  }
  clearCache(sessionStorage?: boolean) {
    if (sessionStorage) {
      window.sessionStorage.clear()
    } else {
      window.localStorage.clear()
    }
  }
}
export default new Cache()
