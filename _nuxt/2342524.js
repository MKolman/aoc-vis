(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{362:function(t,r,e){"use strict";var o,n,a;a=function(a){function g(a,t,r,e){a.hasOwnProperty(t)||(a[t]=e.apply(null,r))}g(a=a?a._modules:{},"Series/Variwide/VariwidePoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t){var r=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function r(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),e=t.isNumber;return function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.crosshairWidth=void 0,b.options=void 0,b.series=void 0,b}return r(b,a),b.prototype.isValid=function(){return e(this.y)&&e(this.z)},b}(a.seriesTypes.column.prototype.pointClass)})),g(a,"Series/Variwide/VariwideComposition.js",[a["Core/Axis/Tick.js"],a["Core/Axis/Axis.js"],a["Core/Utilities.js"]],(function(a,t,r){var e=r.addEvent;r=r.wrap,a.prototype.postTranslate=function(a,b,t){var r=this.axis,e=a[b]-r.pos;r.horiz||(e=r.len-e),e=r.series[0].postTranslate(t,e),r.horiz||(e=r.len-e),a[b]=r.pos+e},e(t,"afterDrawCrosshair",(function(a){this.variwide&&this.cross&&this.cross.attr("stroke-width",a.point&&a.point.crosshairWidth)})),e(t,"afterRender",(function(){var a=this;!this.horiz&&this.variwide&&this.chart.labelCollectors.push((function(){return a.tickPositions.filter((function(b){return a.ticks[b].label})).map((function(b,t){return(b=a.ticks[b].label).labelrank=a.zData[t],b}))}))})),e(a,"afterGetPosition",(function(a){var b=this.axis,t=b.horiz?"x":"y";b.variwide&&(this[t+"Orig"]=a.pos[t],this.postTranslate(a.pos,t,this.pos))})),r(a.prototype,"getLabelPosition",(function(a,b,t,r,e,o,n,h){var c=Array.prototype.slice.call(arguments,1),p=e?"x":"y";return this.axis.variwide&&"number"==typeof this[p+"Orig"]&&(c[e?0:1]=this[p+"Orig"]),c=a.apply(this,c),this.axis.variwide&&this.axis.categories&&this.postTranslate(c,p,this.pos),c}))})),g(a,"Series/Variwide/VariwideSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Series/Variwide/VariwidePoint.js"],a["Core/Utilities.js"]],(function(a,t,r){var e=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function r(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),o=a.seriesTypes.column,b=r.extend,g=r.merge,q=r.pick;return r=function(b){function t(){var a=null!==b&&b.apply(this,arguments)||this;return a.data=void 0,a.options=void 0,a.points=void 0,a.relZ=void 0,a.totalZ=void 0,a.zData=void 0,a}return e(t,b),t.prototype.processData=function(b){this.totalZ=0,this.relZ=[],a.seriesTypes.column.prototype.processData.call(this,b),(this.xAxis.reversed?this.zData.slice().reverse():this.zData).forEach((function(a,b){this.relZ[b]=this.totalZ,this.totalZ+=a}),this),this.xAxis.categories&&(this.xAxis.variwide=!0,this.xAxis.zData=this.zData)},t.prototype.postTranslate=function(a,b,t){var r=this.xAxis,e=this.relZ;a=r.reversed?e.length-a:a;var o=r.reversed?-1:1,n=r.toPixels(r.reversed?(r.dataMax||0)+r.pointRange:r.dataMin||0),h=r.toPixels(r.reversed?r.dataMin||0:(r.dataMax||0)+r.pointRange),c=Math.abs(h-n),l=this.totalZ;r=this.chart.inverted?h-(this.chart.plotTop-o*r.minPixelPadding):n-this.chart.plotLeft-o*r.minPixelPadding,n=a/e.length*c,h=(a+o)/e.length*c;var g=q(e[a],l)/l*c;return e=q(e[a+o],l)/l*c,t&&(t.crosshairWidth=e-g),r+g+(b-(r+n))*(e-g)/(h-n)},t.prototype.translate=function(){var b=this.options.crisp,t=this.xAxis;this.options.crisp=!1,a.seriesTypes.column.prototype.translate.call(this),this.options.crisp=b;var r=this.chart.inverted,e=this.borderWidth%2/2;this.points.forEach((function(a,b){if(t.variwide){var o=this.postTranslate(b,a.shapeArgs.x,a);b=this.postTranslate(b,a.shapeArgs.x+a.shapeArgs.width)}else o=a.plotX,b=t.translate(a.x+a.z,0,0,0,1);this.options.crisp&&(o=Math.round(o)-e,b=Math.round(b)-e),a.shapeArgs.x=o,a.shapeArgs.width=Math.max(b-o,1),a.plotX=(o+b)/2,r?a.tooltipPos[1]=t.len-a.shapeArgs.x-a.shapeArgs.width/2:a.tooltipPos[0]=a.shapeArgs.x+a.shapeArgs.width/2}),this),this.options.stacking&&this.correctStackLabels()},t.prototype.correctStackLabels=function(){var t,r,e,g,a=this,b=a.options,o=a.yAxis;a.points.forEach((function(n){g=n.x,r=n.shapeArgs.width,(e=o.stacking.stacks[(a.negStacks&&n.y<(b.startFromThreshold?0:b.threshold)?"-":"")+a.stackKey])&&(t=e[g])&&!n.isNull&&t.setOffset(-r/2||0,r||0,void 0,void 0,n.plotX)}))},t.defaultOptions=g(o.defaultOptions,{pointPadding:0,groupPadding:0}),t}(o),b(r.prototype,{irregularWidths:!0,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],pointClass:t}),a.registerSeriesType("variwide",r),r})),g(a,"masters/modules/variwide.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(o=[e(131)],void 0===(n=function(g){return a(g),a.Highcharts=g,a}.apply(r,o))||(t.exports=n))}}]);