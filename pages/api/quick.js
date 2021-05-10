export default (req, res) => {
  const data = {
    list: [
      {
        imgLink: 'https://besticon-demo.herokuapp.com/icon?url=www.baidu.com&size=32..50..120',
        url: 'www.baidu.com',
        name: '百度'
      },
      {
        imgLink: 'https://besticon-demo.herokuapp.com/icon?url=cn.vuejs.org&size=32..50..120',
        url: 'cn.vuejs.org',
        name: 'Vue'
      },
      {
        imgLink: 'https://besticon-demo.herokuapp.com/icon?url=edu.lagou.com&size=32..50..120',
        url: 'edu.lagou.com',
        name: '拉勾教育'
      }
    ]
  }
  res.send(data)
}