(this["webpackJsonpreact-gq"]=this["webpackJsonpreact-gq"]||[]).push([[0],{41:function(e,t,a){e.exports=a(54)},46:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(34),r=a.n(c),i=(a(46),a(26)),o=a(24),s=a(56),m=a(9),d=a(13),g=a(19),E=a(17),p=a(15),u=a(21);function b(){var e=Object(i.a)(["\nquery ($articleId:Int!){\n    \n      article(id:$articleId) {\n       time,\n       title,\n        blocks{\n          tag\n          content\n        }\n  \n      }\n  \n    }\n\n"]);return b=function(){return e},e}function v(){var e=Object(i.a)(["\n {\n    articles {\n      id,\n      time,\n      title,\n      intro,\n      img,\n      blocks{\n        content\n      }\n\n    }\n  \n}"]);return v=function(){return e},e}var _=Object(o.a)(v()),f=Object(o.a)(b());function h(){var e=Object(p.g)().articleId,t=Object(s.a)(f,{variables:{articleId:e}}),a=t.data,n=t.loading,c=t.error;return n?null:c?"Error! ".concat(c):l.a.createElement("div",{class:"single_blog_post clearfix","data-animated":"fadeInUp"},l.a.createElement("div",{class:"single_blog_post_descr"},l.a.createElement("div",{class:"single_blog_post_date"},new Date(a.article.time).toDateString()+" | "+new Date(a.article.time).toLocaleTimeString()),l.a.createElement("div",{class:"single_blog_post_title"},a.article.title),l.a.createElement("ul",{class:"single_blog_post_info"},l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0);"},"Admin")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0);"},"Creative")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0);"},"0 Comments")))),l.a.createElement("div",{class:"single_blog_post_img"},l.a.createElement("img",{src:a.article.img,alt:""})),l.a.createElement("div",{class:"single_blog_post_content"},l.a.createElement("h4",{align:"center",class:"margbot50"},"deployed on Github Pages: ",l.a.createElement("a",{href:"https://legendaryc.github.io/GBST/"},l.a.createElement("i",{class:"fas fa-door-open fa-1x"}))),a.article.blocks.map((function(e){return"p"==e.tag?l.a.createElement("p",{class:"margbot50"},e.content):l.a.createElement("div",{class:"single_blog_post_img"},l.a.createElement("img",{src:e.content,alt:""}))}))))}function j(){var e=Object(s.a)(_),t=e.data,a=e.loading;return console.log(t),a?l.a.createElement("p",null,"Loading..."):t.articles.map((function(e){return l.a.createElement("div",{class:"blog_post margbot50 clearfix","data-animated":"fadeInUp"},l.a.createElement("div",{id:"blog1",class:"blog_post_img"},l.a.createElement("img",{id:"img2",src:e.img,alt:""}),l.a.createElement(u.b,{class:"zoom",to:"/detail/"+e.id})),l.a.createElement("div",{class:"blog_post_descr"},l.a.createElement("div",{class:"blog_post_date"},new Date(e.time).toDateString()+" | "+new Date(e.time).toLocaleTimeString()),l.a.createElement(u.b,{class:"blog_post_title",to:"/detail/"+e.id},e.title),l.a.createElement("ul",{class:"blog_post_info"},l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0);"},"Admin")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0);"},"Creative")),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:void(0);"},"0 Comments"))),l.a.createElement("hr",null),l.a.createElement("div",{class:"blog_post_content"},e.intro+" ... "),l.a.createElement(u.b,{class:"read_more_btn",to:"/detail/"+e.id},"Read More")))}))}var w=new d.a({link:Object(E.b)({uri:"https://54.197.2.14:80/graphql/",headers:{"Content-Type":"application/graphql"},fetchOptions:{method:"GET"}}),cache:new g.a}),I=function(){return l.a.createElement(m.a,{client:w},l.a.createElement(u.a,null,l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/detail/:articleId",component:h}),l.a.createElement(p.b,{exact:!0,path:"/list",component:j}),l.a.createElement(p.a,{to:"/list"}))),l.a.createElement("ul",{id:"sahidu",class:"pagination clearfix"},l.a.createElement("li",{class:"active"},l.a.createElement("a",{href:"javascript:void(0);"},"1"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(I,null),document.getElementById("blogList")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.dcb331dc.chunk.js.map