(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(2),o=n.n(c),r=(n(14),n(3)),s=n(4),l=n(6),u=n(5),m=n(7),g=[{id:0,img:"./images/Unknown.jpeg"},{id:1,img:"./images/Unknown-1.jpeg"},{id:2,img:"./images/Unknown-2.jpeg"},{id:3,img:"./images/Unknown-3.jpeg"},{id:4,img:"./images/Unknown-4.jpeg"}],d=(n(15),function(e){return a.a.createElement("div",null,a.a.createElement("img",{onClick:function(){e.clicked(e.id)},src:e.img,alt:"test"}))}),h=function(e){return a.a.createElement("div",null,"Score: ",e.score)},f=function(e){function t(){var e,n;Object(r.a)(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={score:0,images:[],length:0,clicked:[]},n.shuffle=function(){var e=n.state.images;e=e.sort(function(){return Math.random()-0}),n.setState({iamges:e})},n.clicked=function(e){var t=n.state.clicked;if(t.includes(e))alert("You lost"),n.setState({score:0,clicked:[]}),n.shuffle();else{var i=n.state.score;i+=1,n.setState({score:i}),t.push(e),n.setState({clicked:t}),n.shuffle()}n.checkWin()},n.checkWin=function(){n.state.length===n.state.clicked.length&&(alert("You Win"),n.setState({score:0,clicked:[]}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({images:g,length:g.length})}},{key:"render",value:function(){var e=this,t=this.state,n=t.images,c=t.score;return a.a.createElement(i.Fragment,null,a.a.createElement(h,{score:c}),a.a.createElement("div",{className:"img-game"},n.map(function(t,n){return a.a.createElement(d,{id:t.id,key:n,img:t.img,clicked:e.clicked})})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.481a10ad.chunk.js.map