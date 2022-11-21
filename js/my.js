// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector('#percent'); // 获取图标

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

//document.getElementById('page-name').innerText = document.title.split(' | haor')[0];

var path = document.getElementById("post-cover").src;
console.log(path);
if(path !== 'https://blog.zhheo.com/null'){ //将这里的网站前面替换成你自己的,判断是否是不想变的图片，例如放入主页图片url
    var httpRequest = new XMLHttpRequest();    
    httpRequest.open('GET', path + '?imageAve', true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;            var obj = eval('(' + json + ')');
            var value = obj.RGB;
            value ="#" + value.slice(2)
            // console.log(value);
        //   document.getElementById('page-header').style.backgroundColor=value;
            document.styleSheets[0].addRule('#page-header:before','background: '+ value +'!important');
        }
    };
}else{
    document.styleSheets[0].addRule('#page-header:before','background: none!important');
}