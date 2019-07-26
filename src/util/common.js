class Common {
  // ----------------------------------common start
  /**
   * @function xhrGet  利用xhr发送get请求;
   *
   * @param {string} url - 请求路径
   * @param {object} [data] - 请求参数
   *
   * @returns new Promise
   */
  xhrGet(url, data) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest()
      if (typeof data !== 'function' && data instanceof Object) {
        // 拼接字符串;
        var _arr = []
        for (var key in data) {
          _arr.push(`${key}=${data[key]}`)
        }
        var _symbol = /\?/.test(url) ? '&' : '?'
        url += _symbol + _arr.join('&')
      }
      xhr.open('GET', url)
      xhr.send(null)
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200)
          resolve(xhr.responseText)
      }
    })
  }
  /**
   * @function xhrPost  利用xhr发送post请求;
   *
   * @param {string} url - 请求路径
   * @param {object} [data] - 请求参数
   *
   * @returns new Promise
   */
  xhrPost(url, data) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      var _data = []
      for (let key in data) {
        _data.push(`${key}=${data[key]}`)
      }
      xhr.send(_data.join('&'))
      xhr.onload = function() {
        xhr.status === 200 ? resolve(xhr.responseText) : reject(xhr.status)
      }
    })
  }
  /**
   * @function jsonp 跨域请求
   *
   * @param {string} url
   * @param {string} [cb_key=callback] - 回调函数名
   * @param {object} [data={}]
   *
   * @returns new Promise
   */
  jsonp(url, cb_key, data) {
    cb_key = !cb_key ? 'callback' : cb_key

    data = !data ? {} : data
    return new Promise((resove, reject) => {
      var cb_name = 'gp10' + Date.now()
      window[cb_name] = function(res) {
        resove(res)
      }
      var script = document.createElement('script')
      url += /\?/.test(url) ? '&' : '?'
      url += cb_key + '=' + cb_name
      for (let key in data) {
        url += `&${key}=${data[key]}`
      }

      script.src = url
      document.body.appendChild(script)
      script.onload = function() {
        this.remove()
      }
    })
  }
  /**
   * @function cookie 设置cookie功能;
   *
   * @param {*} key
   * @param {*} value
   * @param {object} options
   */
  cookie(key, value, options) {
    var res = ''
    res += key + '=' + encodeURI(value)
    // 有没有过期时间;
    if (typeof options.expires === 'number') {
      var d = new Date()
      d.setDate(d.getDate() + options.expires)
      res += ';expires=' + d
    }
    res += options.path ? ';path=' + options.path : ''
    res += options.domain ? ';domain=' + options.domain : ''

    document.cookie = res
  }
  /**
   * @function removeCookie 移除cookie功能;
   *
   * @param {*} key
   * @param {object} options = { expires: -1 }
   */
  removeCookie(key, options) {
    // 确保options一定是对象类型,同时可以配置默认参数;
    var default_options = {
      expires: -1
    }
    options =
      typeof options == 'object'
        ? Object.assign(default_options, options)
        : default_options
    this.cookie(key, null, options)
  }
  /**
   * @function getCookie 根据key获取cookie值;
   *
   * @param {*} key
   *
   * @returns {*} value
   */
  getCookie(key) {
    var _cookie = document.cookie
    var _cookie_item = _cookie.split('; ')
    var _key = []
    var _value = _cookie_item.map(item => {
      var _temp = item.split('=')
      _key.push(_temp[0])
      return _temp[1]
    })
    var index = _key.indexOf(key)
    if (index !== -1) {
      return _value[index]
    }
    return ''
  }

  // ----------------------------------common end

  // ----------------------------------工具 start
  /**
   * @function $$ id选择器
   *
   * @param {*} id
   *
   * @returns dom对象
   */
  $$(id) {
    return document.getElementById(id)
  }
  /**
   * @function _ 普通选择器，可选择数组或单个元素
   *
   * @param {string} select
   *
   * @returns dom对象 或 dom对象数组 或 null
   */
  _(select) {
    // 如果选择的数组只有一项,直接返回这个项而不是数组;
    var doms = document.querySelectorAll(select)
    if (doms.length === 0) {
      return null
    }
    return doms.length === 1 ? doms[0] : doms
  }
  /**
   * @function _toArray 伪数组转化真数组功能
   *
   * @param {*} list - 伪数组
   *
   * @returns 真数组
   */
  _toArray(list) {
    return Array.prototype.slice.call(list)
  }
  /**
   *  @function countDown  倒计时：返回的是目标时间 减去 当前时间的差距
   *
   *  @param {string} dateString - 时间字符串 "2019-05-16 12:35:00"
   *  @param {年份} year
   *  @param {月份} month
   *  @param {日期} date
   *  @param {小时} hour
   *  @param {分钟} minute
   *  @param {秒} second
   *  注：可传入1个参数dateString OR 3个参数y,m,d OR 6个参数y,m,d,h,m,s
   *
   *  @returns {object}
   *  {
   *    hour : string,
   *    minute : string,
   *    second : string,
   *    ms : string
   *  }
   *
   * */
  countDown(year, month, date, hour, minute, second) {
    // 1. 参数判断
    var target = null
    switch (arguments.length) {
      case 1:
        target = new Date(year) // 此处year参数为dateString
        break
      case 3:
        target = new Date(year, month - 1, date)
        break
      case 6:
        target = new Date(year, month - 1, date, hour, minute, second)
        break
    }
    var now = Date.now()
    //差值时间(单位为ms);
    var Dtime = target.getTime() - now

    var res_hour = parseInt(Dtime / 1000 / 3600)
    var res_minute = parseInt((Dtime - res_hour * 1000 * 3600) / 1000 / 60)
    var res_second = parseInt(
      (Dtime - res_hour * 1000 * 3600 - res_minute * 1000 * 60) / 1000
    )
    var res_ms = Dtime % 1000
    return {
      hour: this.buling(res_hour),
      minute: res_minute.toString(),
      second: res_second.toString(),
      ms: res_ms.toString()
    }
  }
  // 格式化工具 [可选使用] ，使大于0且小于10的数字显示为为01、02这样的格式
  buling(num) {
    return num > 0 && num < 10 ? '0' + num : num.toString()
  }
  /**
   * @function throttle 函数节流功能
   *
   * @param {function} cb - 需要节流的函数
   * @param {number} delay - 节流时延：delay时延中仅能触发一次cb函数执行，多次触发无效
   *
   * @returns {function} 返回柯里化封装节流后的cb函数
   */
  throttle(cb, delay) {
    var timer = null
    return function() {
      if (timer !== null) return
      timer = setTimeout(() => {
        cb('#throttle')
        timer = null
      }, delay)
    }
  }
  /**
   * @function debounce 函数去抖功能
   *
   * @param {function} cb - 需要去抖的函数
   * @param {number} delay - 去抖时延：delay时延中多次触发会导致定时器刷新
   *
   * @returns {function} 返回柯里化封装去抖后的cb函数
   */
  debounce(cb, delay) {
    var timer = null
    return function() {
      clearTimeout(timer)
      timer = setTimeout(function() {
        cb('#debounce')
      }, delay)
    }
  }
  /**
   * @function randomColor 返回rgb随机颜色功能
   *
   * @returns {string} `rgb(r,g,b)`
   */
  randomColor() {
    var r = Math.round(Math.random() * 255)
    var g = Math.round(Math.random() * 255)
    var b = Math.round(Math.random() * 255)
    return `rgb(${r},${g},${b})`
  }
  /**
   * @function move 运动功能
   *
   * @param {*} obj - 要运动的元素
   * @param {*} json - 运动选项 键为属性名（例如 height opacity top等) 值为要运动到的属性值
   * @callback {function} [callback] 回调函数
   */
  move(obj, json, callback) {
    clearInterval(obj.t)
    obj.t = setInterval(function() {
      for (var attr in json) {
        var iNow =
          attr === 'opacity'
            ? this.getStyle(obj, attr) * 100
            : parseInt(this.getStyle(obj, attr))
        var speed = (json[attr] - iNow) / 8
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
        iNow += speed
        obj.style[attr] = attr === 'opacity' ? iNow / 100 : iNow + 'px'
        if (iNow == json[attr]) {
          delete json[attr]
          if (this.getJsonLong(json) == 0) {
            clearInterval(obj.t)
            if (callback) {
              callback()
            }
          }
        }
      }
    }, 30)
  }
  // PRIVATE for function move
  getStyle(obj, attr) {
    return getComputedStyle(obj)[attr]
  }
  // PRIVATE for function move
  getJsonLong(jsonData) {
    var length = 0
    for (var ever in jsonData) {
      length++
    }
    return length
  }
  /**
   * @function delegate 事件委托（柯里化）
   *
   * @param {*} callback - 要委托的回调函数
   * @param {string} selector - 选择器，忽略大小写
   * @param {*} [parentNode = document.body]
   */
  delegate(callback, selector, parentNode) {
    return function(evt) {
      var e = evt || window.event
      var target = e.target || e.srcElement

      if (target.nodeName.toLowerCase() === selector) {
        callback()
      } else {
        for (var i = 0; i < e.path.length; i++) {
          if (e.path[i].nodeName.toLowerCase() === selector) {
            callback()
            break
          }
          if (target === (parentNode ? parentNode : document.body)) {
            break
          }
        }
      }
    }
  }
  // ----------------------------------工具 end
}
export default new Common()
