(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{352:function(t,e,n){"use strict";var r,o,b;b=function(b){function t(b,t,e,n){b.hasOwnProperty(t)||(b[t]=n.apply(null,e))}t(b=b?b._modules:{},"Series/Tilemap/TilemapPoint.js",[b["Core/Axis/Color/ColorAxisComposition.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,t,e){var n=this&&this.__extends||function(){var b=function(t,e){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var e in t)t.hasOwnProperty(e)&&(a[e]=t[e])})(t,e)};return function(t,e){function a(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}}(),g=t.series.prototype.pointClass;return e=e.extend,t=function(b){function t(){var t=null!==b&&b.apply(this,arguments)||this;return t.options=void 0,t.radius=void 0,t.series=void 0,t.tileEdges=void 0,t}return n(t,b),t.prototype.haloPath=function(){return this.series.tileShape.haloPath.apply(this,arguments)},t}(t.seriesTypes.heatmap.prototype.pointClass),e(t.prototype,{setState:g.prototype.setState,setVisible:b.pointSetVisible}),t})),t(b,"Series/Tilemap/TilemapShapes.js",[b["Core/Globals.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,t,e){function n(a,t,b){return{xPad:((a=a.options).colsize||1)/-t,yPad:(a.rowsize||1)/-b}}var g=(t=t.seriesTypes).heatmap,r=t.scatter,o=e.clamp,l=e.pick;return{hexagon:{alignDataLabel:r.prototype.alignDataLabel,getSeriesPadding:function(a){return n(a,3,2)},haloPath:function(a){if(!a)return[];var t=this.tileEdges;return[["M",t.x2-a,t.y1+a],["L",t.x3+a,t.y1+a],["L",t.x4+1.5*a,t.y2],["L",t.x3+a,t.y3-a],["L",t.x2-a,t.y3-a],["L",t.x1-1.5*a,t.y2],["Z"]]},translate:function(){var t,a=this.options,e=this.xAxis,b=this.yAxis,n=a.pointPadding||0,p=(a.colsize||1)/3,r=(a.rowsize||1)/2;this.generatePoints(),this.points.forEach((function(a){var h=o(Math.floor(e.len-e.translate(a.x-2*p,0,1,0,1)),-e.len,2*e.len),d=o(Math.floor(e.len-e.translate(a.x-p,0,1,0,1)),-e.len,2*e.len),c=o(Math.floor(e.len-e.translate(a.x+p,0,1,0,1)),-e.len,2*e.len),u=o(Math.floor(e.len-e.translate(a.x+2*p,0,1,0,1)),-e.len,2*e.len),y=o(Math.floor(b.translate(a.y-r,0,1,0,1)),-b.len,2*b.len),f=o(Math.floor(b.translate(a.y,0,1,0,1)),-b.len,2*b.len),q=o(Math.floor(b.translate(a.y+r,0,1,0,1)),-b.len,2*b.len),x=l(a.pointPadding,n),g=x*Math.abs(d-h)/Math.abs(q-f);g=e.reversed?-g:g;var v=e.reversed?-x:x;x=b.reversed?-x:x,a.x%2&&(y+=t=t||Math.round(Math.abs(q-y)/2)*(b.reversed?-1:1),f+=t,q+=t),a.plotX=a.clientX=(d+c)/2,a.plotY=f,h+=g+v,d+=v,c-=v,u-=g+v,y-=x,q+=x,a.tileEdges={x1:h,x2:d,x3:c,x4:u,y1:y,y2:f,y3:q},a.shapeType="path",a.shapeArgs={d:[["M",d,y],["L",c,y],["L",u,f],["L",c,q],["L",d,q],["L",h,f],["Z"]]}})),this.translateColors()}},diamond:{alignDataLabel:r.prototype.alignDataLabel,getSeriesPadding:function(a){return n(a,2,2)},haloPath:function(a){if(!a)return[];var t=this.tileEdges;return[["M",t.x2,t.y1+a],["L",t.x3+a,t.y2],["L",t.x2,t.y3-a],["L",t.x1-a,t.y2],["Z"]]},translate:function(){var t,a=this.options,e=this.xAxis,b=this.yAxis,n=a.pointPadding||0,r=a.colsize||1,h=(a.rowsize||1)/2;this.generatePoints(),this.points.forEach((function(a){var g=o(Math.round(e.len-e.translate(a.x-r,0,1,0,0)),-e.len,2*e.len),p=o(Math.round(e.len-e.translate(a.x,0,1,0,0)),-e.len,2*e.len),d=o(Math.round(e.len-e.translate(a.x+r,0,1,0,0)),-e.len,2*e.len),u=o(Math.round(b.translate(a.y-h,0,1,0,0)),-b.len,2*b.len),c=o(Math.round(b.translate(a.y,0,1,0,0)),-b.len,2*b.len),y=o(Math.round(b.translate(a.y+h,0,1,0,0)),-b.len,2*b.len),q=l(a.pointPadding,n),f=q*Math.abs(p-g)/Math.abs(y-c);f=e.reversed?-f:f,q=b.reversed?-q:q,a.x%2&&(u+=t=Math.abs(y-u)/2*(b.reversed?-1:1),c+=t,y+=t),a.plotX=a.clientX=p,a.plotY=c,g+=f,d-=f,u-=q,y+=q,a.tileEdges={x1:g,x2:p,x3:d,y1:u,y2:c,y3:y},a.shapeType="path",a.shapeArgs={d:[["M",p,u],["L",d,c],["L",p,y],["L",g,c],["Z"]]}})),this.translateColors()}},circle:{alignDataLabel:r.prototype.alignDataLabel,getSeriesPadding:function(a){return n(a,2,2)},haloPath:function(a){return r.prototype.pointClass.prototype.haloPath.call(this,a+(a&&this.radius))},translate:function(){var t,e,g,n,a=this.options,r=this.xAxis,b=this.yAxis,l=a.pointPadding||0,h=(a.rowsize||1)/2,d=a.colsize||1,c=!1;this.generatePoints(),this.points.forEach((function(a){var p=o(Math.round(r.len-r.translate(a.x,0,1,0,0)),-r.len,2*r.len),y=o(Math.round(b.translate(a.y,0,1,0,0)),-b.len,2*b.len),f=l,x=!1;void 0!==a.pointPadding&&(f=a.pointPadding,c=x=!0),n&&!c||(t=Math.abs(o(Math.floor(r.len-r.translate(a.x+d,0,1,0,0)),-r.len,2*r.len)-p),e=Math.abs(o(Math.floor(b.translate(a.y+h,0,1,0,0)),-b.len,2*b.len)-y),g=Math.floor(Math.sqrt(t*t+e*e)/2),n=Math.min(t,g,e)-f,c&&!x&&(c=!1)),a.x%2&&(y+=e*(b.reversed?-1:1)),a.plotX=a.clientX=p,a.plotY=y,a.radius=n,a.shapeType="circle",a.shapeArgs={x:p,y:y,r:n}})),this.translateColors()}},square:{alignDataLabel:g.prototype.alignDataLabel,translate:g.prototype.translate,getSeriesPadding:b.noop,haloPath:g.prototype.pointClass.prototype.haloPath}}})),t(b,"Series/Tilemap/TilemapComposition.js",[b["Core/Axis/Axis.js"],b["Core/Utilities.js"]],(function(b,t){(t=t.addEvent)(b,"afterSetAxisTranslation",(function(){if(!this.recomputingForTilemap&&"colorAxis"!==this.coll){var b=this,t=b.series.map((function(t){return t.getSeriesPixelPadding&&t.getSeriesPixelPadding(b)})).reduce((function(b,t){return(b&&b.padding)>(t&&t.padding)?b:t}),void 0)||{padding:0,axisLengthFactor:1},e=Math.round(t.padding*t.axisLengthFactor);t.padding&&(b.len-=e,b.recomputingForTilemap=!0,b.setAxisTranslation(),delete b.recomputingForTilemap,b.minPixelPadding+=t.padding,b.len+=e)}}))})),t(b,"Series/Tilemap/TilemapSeries.js",[b["Core/Globals.js"],b["Core/Series/SeriesRegistry.js"],b["Series/Tilemap/TilemapPoint.js"],b["Series/Tilemap/TilemapShapes.js"],b["Core/Utilities.js"]],(function(b,t,e,n,g){var r=this&&this.__extends||function(){var b=function(a,t){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var t in a)a.hasOwnProperty(t)&&(b[t]=a[t])},b(a,t)};return function(a,t){function e(){this.constructor=a}b(a,t),a.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}();b=b.noop;var o=t.seriesTypes,l=o.column,a=o.heatmap;o=o.scatter;var h=g.extend,d=g.merge;return g=function(b){function t(){var a=null!==b&&b.apply(this,arguments)||this;return a.data=void 0,a.options=void 0,a.points=void 0,a.tileShape=void 0,a}return r(t,b),t.prototype.alignDataLabel=function(){return this.tileShape.alignDataLabel.apply(this,Array.prototype.slice.call(arguments))},t.prototype.drawPoints=function(){var a=this;l.prototype.drawPoints.call(this),this.points.forEach((function(b){b.graphic&&b.graphic[a.chart.styledMode?"css":"animate"](a.colorAttribs(b))}))},t.prototype.getSeriesPixelPadding=function(a){var b=a.isXAxis,t=this.tileShape.getSeriesPadding(this);if(!t)return{padding:0,axisLengthFactor:1};var e=Math.round(a.translate(b?2*t.xPad:t.yPad,0,1,0,1));return a=Math.round(a.translate(b?t.xPad:0,0,1,0,1)),{padding:Math.abs(e-a)||0,axisLengthFactor:b?2:1.1}},t.prototype.setOptions=function(){var a=b.prototype.setOptions.apply(this,Array.prototype.slice.call(arguments));return this.tileShape=n[a.tileShape],a},t.prototype.translate=function(){return this.tileShape.translate.apply(this,Array.prototype.slice.call(arguments))},t.defaultOptions=d(a.defaultOptions,{marker:null,states:{hover:{halo:{enabled:!0,size:2,opacity:.5,attributes:{zIndex:3}}}},pointPadding:2,tileShape:"hexagon"}),t}(a),h(g.prototype,{getSymbol:b,markerAttribs:o.prototype.markerAttribs,pointAttribs:l.prototype.pointAttribs,pointClass:e}),t.registerSeriesType("tilemap",g),g})),t(b,"masters/modules/tilemap.src.js",[],(function(){}))},t.exports?(b.default=b,t.exports=b):(r=[n(131),n(243)],void 0===(o=function(t){return b(t),b.Highcharts=t,b}.apply(e,r))||(t.exports=o))}}]);