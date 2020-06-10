## 原生Ajax
1，创建xhr实例
var  xhr = new XMLHttpRequest();
2，open绑定方法
xhr.open("get","url");
3，发送请求
xhr.send()
4，监听数据
xhr.onreadystatechange