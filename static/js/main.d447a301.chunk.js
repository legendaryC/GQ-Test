(this["webpackJsonpreact-gq"]=this["webpackJsonpreact-gq"]||[]).push([[0],{41:function(e,t,a){e.exports=a(54)},46:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(33),r=a.n(c),i=(a(46),a(34)),o=a(25),s=a(56),m=a(9),d=a(13),u=a(19),p=a(17),g=a(15),E=a(21);function b(){var e=Object(i.a)(["\n {\n    articles {\n      id,\n      time,\n      title,\n      img,\n      blocks{\n        content\n      }\n\n    }\n  \n}"]);return b=function(){return e},e}var h=Object(o.a)(b());function v(){var e=Object(g.g)().articleId;return l.a.createElement("h3",null,"Requested topic ID: ",e)}function f(){var e=Object(s.a)(h),t=e.data,a=e.loading;return console.log(t),a?l.a.createElement("p",null,"Loading..."):t.articles.map((function(e){return l.a.createElement("div",{class:"blog_post margbot50 clearfix","data-animated":"fadeInUp"},l.a.createElement("div",{id:"blog1",class:"blog_post_img"},l.a.createElement("img",{id:"img2",src:"img/blog/4.png",alt:""}),l.a.createElement(E.b,{class:"zoom",to:"/detail/"+e.id})),l.a.createElement("div",{class:"blog_post_descr"},l.a.createElement("div",{class:"blog_post_date"},new Date(e.time).toDateString()+" | "+new Date(e.time).toLocaleTimeString()),l.a.createElement(E.b,{class:"blog_post_title",to:"/detail/"+e.id},e.title),l.a.createElement("ul",{class:"blog_post_info"},l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0);"},"Admin")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0);"},"Creative")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0);"},"0 Comments"))),l.a.createElement("hr",null),l.a.createElement("div",{class:"blog_post_content"},e.blocks[0].content+" ... "),l.a.createElement(E.b,{class:"read_more_btn",to:"/detail/"+e.id},"Read More")))}))}var _=new d.a({link:Object(p.b)({uri:"https://54.197.2.14:80/graphql/",headers:{"Content-Type":"application/graphql"},fetchOptions:{method:"GET"}}),cache:new u.a}),w=function(){return l.a.createElement(m.a,{client:_},l.a.createElement(E.a,null,l.a.createElement(g.d,null,l.a.createElement(g.b,{exact:!0,path:"/detail/:articleId",component:v}),l.a.createElement(g.b,{exact:!0,path:"/list",component:f}),l.a.createElement(g.a,{to:"/list"}))),l.a.createElement("ul",{id:"sahidu",class:"pagination clearfix"},l.a.createElement("li",{class:"active"},l.a.createElement("a",{href:"javascript:void(0);"},"1"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(w,null),document.getElementById("blogList")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.d447a301.chunk.js.map