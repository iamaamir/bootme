"use strict";!function(){var e=window;document;e.whenReady=function(e){"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&e()})},e.addEventListener("load",function(){}),whenReady(function(){setTimeout(function(){addClass(_(".preloader"),"hidden")},500)})}(window,document);var _=function(e){return document.querySelector(e)},_all=function(e){return document.querySelectorAll(e)};window.ajax={},window.ajax.x=function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var e,n=["MSXML2.XmlHttp.6.0","MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],t=0;t<n.length;t++)try{e=new ActiveXObject(n[t]);break}catch(e){}return e},window.ajax.send=function(e,n,t,o,a){void 0===a&&(a=!0);var s=window.ajax.x();s.open(t,e,a),s.onreadystatechange=function(){4==s.readyState&&n(s.responseText)},"POST"==t&&s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.send(o)},window.ajax.get=function(e,n,t,o){var a=[];for(var s in n)a.push(encodeURIComponent(s)+"="+encodeURIComponent(n[s]));window.ajax.send(e+(a.length?"?"+a.join("&"):""),t,"GET",null,o)},window.ajax.post=function(e,n,t,o){var a=[];for(var s in n)a.push(encodeURIComponent(s)+"="+encodeURIComponent(n[s]));window.ajax.send(e,t,"POST",a.join("&"),o)},window.addClass=function(e,n){e.classList?e.classList.add(n):e.className+=" "+n},window.removeClass=function(e,n){e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")},window.hasClass=function(e){e.classList?e.classList.contains(className):new RegExp("(^| )"+className+"( |$)","gi").test(e.className)},window.toggleClass=function(){if(el.classList)el.classList.toggle(className);else{for(var e=el.className.split(" "),n=-1,t=e.length;t--;)e[t]===className&&(n=t);0<=n?e.splice(n,1):e.push(className),el.className=e.join(" ")}},window.on=function(e,n,t){e.addEventListener?e.addEventListener(n,t):e.attachEvent("on"+n,function(){t.call(e)})},window.off=function(e,n,t){e.removeEventListener?e.removeEventListener(n,t):e.detachEvent("on"+n,t)},window.forEachElement=function(e,n){for(var t=_all(e),o=0;o<t.length;o++)n(t[o],o)},window.each=function(e,n){Array.prototype.forEach.call(e,n)},window.jump=function(e,n){var t=document.documentElement,o=t.scrollTop,a=e-o,s=0,i=function(){s+=20;var e=Math.easeInOutQuad(s,o,a,n);t.scrollTop=e,s<n&&setTimeout(i,20)};i()},Math.easeInOutQuad=function(e,n,t,o){return(e/=o/2)<1?t/2*e*e+n:-t/2*(--e*(e-2)-1)+n};