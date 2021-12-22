(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{368:function(t,o,r){"use strict";var e,n,a;a=function(a){function t(a,b,t,o){a.hasOwnProperty(b)||(a[b]=o.apply(null,t))}t(a=a?a._modules:{},"Series/OnSeriesComposition.js",[a["Series/Column/ColumnSeries.js"],a["Core/Series/Series.js"],a["Core/Utilities.js"]],(function(a,b,t){var o,r=a.prototype,e=b.prototype,n=t.defined,l=t.stableSort;return function(a){function b(){return e.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||this)}function t(){r.translate.apply(this);var t,a=this,g=a.options,q=a.chart,o=a.points,e=g.onSeries,c=(e=e&&q.get(e))&&e.options.step,h=e&&e.points,f=q.inverted,d=a.xAxis,b=a.yAxis;q=o.length-1,g=g.onKey||"y";var p,v=h&&h.length,y=0;if(e&&e.visible&&v){y=(e.pointXOffset||0)+(e.barW||0)/2;var x=e.currentDataGrouping,m=h[v-1].x+(x?x.totalRange:0);for(l(o,(function(t,o){return t.x-o.x})),g="plot"+g[0].toUpperCase()+g.substr(1);v--&&o[q];){var S=h[v];if((x=o[q]).y=S.y,S.x<=x.x&&void 0!==S[g]){if(x.x<=m&&(x.plotY=S[g],S.x<x.x&&!c&&(p=h[v+1])&&void 0!==p[g])){var u=(x.x-S.x)/(p.x-S.x);x.plotY+=u*(p[g]-S[g]),x.y+=u*(p.y-S.y)}if(v++,0>--q)break}}}o.forEach((function(r,e){if(r.plotX+=y,(void 0===r.plotY||f)&&(0<=r.plotX&&r.plotX<=d.len?f?(r.plotY=d.translate(r.x,0,1,0,1),r.plotX=n(r.y)?b.translate(r.y,0,0,0,1):0):r.plotY=(d.opposite?0:a.yAxis.len)+d.offset:r.shapeArgs={}),(t=o[e-1])&&t.plotX===r.plotX){void 0===t.stackIndex&&(t.stackIndex=0);var l=t.stackIndex+1}r.stackIndex=l})),this.onSeries=e}var o=[];a.compose=function(a){if(-1===o.indexOf(a)){o.push(a);var g=a.prototype;g.getPlotBox=b,g.translate=t}return a},a.getPlotBox=b,a.translate=t}(o||(o={})),o})),t(a,"Series/Windbarb/WindbarbPoint.js",[a["Core/Utilities.js"],a["Series/Column/ColumnSeries.js"]],(function(a,b){var t=this&&this.__extends||function(){var a=function(t,b){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var b in t)t.hasOwnProperty(b)&&(a[b]=t[b])},a(t,b)};return function(t,b){function o(){this.constructor=t}a(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}}(),o=a.isNumber;return function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.beaufort=void 0,b.beaufortLevel=void 0,b.direction=void 0,b.options=void 0,b.series=void 0,b}return t(b,a),b.prototype.isValid=function(){return o(this.value)&&0<=this.value},b}(b.prototype.pointClass)})),t(a,"Series/Windbarb/WindbarbSeries.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Globals.js"],a["Series/OnSeriesComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"],a["Series/Windbarb/WindbarbPoint.js"]],(function(a,b,t,o,r,e){var n=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var o in t)t.hasOwnProperty(o)&&(a[o]=t[o])},a(b,t)};return function(b,t){function o(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),l=a.animObject;a=b.noop;var p=o.series,c=o.seriesTypes.column,u=r.extend,h=r.merge,f=r.pick;return r=function(a){function t(){var t=null!==a&&a.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t}return n(t,a),t.registerApproximation=function(){b.approximations&&!b.approximations.windbarb&&(b.approximations.windbarb=function(a,t){var o,r=0,e=0,n=a.length;for(o=0;o<n;o++)r+=a[o]*Math.cos(t[o]*b.deg2rad),e+=a[o]*Math.sin(t[o]*b.deg2rad);return[a.reduce((function(a,t){return a+t}),0)/a.length,Math.atan2(e,r)/b.deg2rad]})},t.prototype.init=function(a,o){t.registerApproximation(),p.prototype.init.call(this,a,o)},t.prototype.pointAttribs=function(a,t){var o=this.options;a=a.color||this.color;var b=this.options.lineWidth;return t&&(a=o.states[t].color||a,b=(o.states[t].lineWidth||b)+(o.states[t].lineWidthPlus||0)),{stroke:a,"stroke-width":b}},t.prototype.windArrow=function(a){var t=1.943844*a.value,b=this.options.vectorLength/20,o=-10;if(a.isNull)return[];if(0===a.beaufortLevel)return this.chart.renderer.symbols.circle(-10*b,-10*b,20*b,20*b);a=[["M",0,7*b],["L",-1.5*b,7*b],["L",0,10*b],["L",1.5*b,7*b],["L",0,7*b],["L",0,-10*b]];var r=(t-t%50)/50;if(0<r)for(;r--;)a.push(-10===o?["L",0,o*b]:["M",0,o*b],["L",5*b,o*b+2],["L",0,o*b+4]),t-=50,o+=7;if(0<(r=(t-t%10)/10))for(;r--;)a.push(-10===o?["L",0,o*b]:["M",0,o*b],["L",7*b,o*b]),t-=10,o+=3;if(0<(r=(t-t%5)/5))for(;r--;)a.push(-10===o?["L",0,o*b]:["M",0,o*b],["L",4*b,o*b]),t-=5,o+=3;return a},t.prototype.drawPoints=function(){var a=this.chart,b=this.yAxis,t=a.inverted,o=this.options.vectorLength/2;this.points.forEach((function(r){var e=r.plotX,g=r.plotY;!1===this.options.clip||a.isInsidePlot(e,0)?(r.graphic||(r.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+f(r.colorIndex,r.series.colorIndex))),r.graphic.attr({d:this.windArrow(r),translateX:e+this.options.xOffset,translateY:g+this.options.yOffset,rotation:r.direction}),this.chart.styledMode||r.graphic.attr(this.pointAttribs(r))):r.graphic&&(r.graphic=r.graphic.destroy()),r.tooltipPos=[e+this.options.xOffset+(t&&!this.onSeries?o:0),g+this.options.yOffset-(t?0:o+b.pos-a.plotTop)]}),this)},t.prototype.animate=function(a){a?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},l(this.options.animation))},t.prototype.markerAttribs=function(a,t){return{}},t.prototype.getExtremes=function(){return{}},t.prototype.shouldShowTooltip=function(b,t,o){return void 0===o&&(o={}),o.ignoreX=this.chart.inverted,o.ignoreY=!o.ignoreX,a.prototype.shouldShowTooltip.call(this,b,t,o)},t.defaultOptions=h(c.defaultOptions,{dataGrouping:{enabled:!0,approximation:"windbarb",groupPixelWidth:30},lineWidth:2,onSeries:null,states:{hover:{lineWidthPlus:0}},tooltip:{pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.value}</b> ({point.beaufort})<br/>'},vectorLength:20,colorKey:"value",yOffset:-20,xOffset:0}),t}(c),t.compose(r),u(r.prototype,{beaufortFloor:[0,.3,1.6,3.4,5.5,8,10.8,13.9,17.2,20.8,24.5,28.5,32.7],beaufortName:"Calm;Light air;Light breeze;Gentle breeze;Moderate breeze;Fresh breeze;Strong breeze;Near gale;Gale;Strong gale;Storm;Violent storm;Hurricane".split(";"),parallelArrays:["x","value","direction"],pointArrayMap:["value","direction"],pointClass:e,trackerGroups:["markerGroup"],invertGroups:a,translate:function(){var a=this.beaufortFloor,b=this.beaufortName;t.translate.call(this),this.points.forEach((function(t){for(var o=0;o<a.length&&!(a[o]>t.value);o++);t.beaufortLevel=o-1,t.beaufort=b[o-1]}))}}),r.registerApproximation(),o.registerSeriesType("windbarb",r),r})),t(a,"masters/modules/windbarb.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(e=[r(131)],void 0===(n=function(t){return a(t),a.Highcharts=t,a}.apply(o,e))||(t.exports=n))}}]);