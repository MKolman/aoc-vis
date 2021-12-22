/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{363:function(t,r,e){"use strict";var o,n,h;h=function(t){var r=t?t._modules:{};function e(t,path,r,e){t.hasOwnProperty(path)||(t[path]=e.apply(null,r))}e(r,"Series/Variwide/VariwidePoint.js",[r["Core/Series/SeriesRegistry.js"],r["Core/Utilities.js"]],(function(t,r){var e,o=this&&this.__extends||(e=function(t,b){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},e(t,b)},function(t,b){function r(){this.constructor=t}e(t,b),t.prototype=null===b?Object.create(b):(r.prototype=b.prototype,new r)}),n=t.seriesTypes.column,h=r.isNumber,c=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.crosshairWidth=void 0,r.options=void 0,r.series=void 0,r}return o(r,t),r.prototype.isValid=function(){return h(this.y)&&h(this.z)},r}(n.prototype.pointClass);return c})),e(r,"Series/Variwide/VariwideComposition.js",[r["Core/Axis/Tick.js"],r["Core/Axis/Axis.js"],r["Core/Utilities.js"]],(function(t,r,e){var o=e.addEvent,n=e.wrap;t.prototype.postTranslate=function(t,r,e){var o=this.axis,n=t[r]-o.pos;o.horiz||(n=o.len-n),n=o.series[0].postTranslate(e,n),o.horiz||(n=o.len-n),t[r]=o.pos+n},o(r,"afterDrawCrosshair",(function(t){this.variwide&&this.cross&&this.cross.attr("stroke-width",t.point&&t.point.crosshairWidth)})),o(r,"afterRender",(function(){var t=this;!this.horiz&&this.variwide&&this.chart.labelCollectors.push((function(){return t.tickPositions.filter((function(r){return t.ticks[r].label})).map((function(r,i){var label=t.ticks[r].label;return label.labelrank=t.zData[i],label}))}))})),o(t,"afterGetPosition",(function(t){var r=this.axis,e=r.horiz?"x":"y";r.variwide&&(this[e+"Orig"]=t.pos[e],this.postTranslate(t.pos,e,this.pos))})),n(t.prototype,"getLabelPosition",(function(t,r,e,label,o,n,h,c){var l,d=Array.prototype.slice.call(arguments,1),f=o?"x":"y";return this.axis.variwide&&"number"==typeof this[f+"Orig"]&&(d[o?0:1]=this[f+"Orig"]),l=t.apply(this,d),this.axis.variwide&&this.axis.categories&&this.postTranslate(l,f,this.pos),l}))})),e(r,"Series/Variwide/VariwideSeries.js",[r["Core/Series/SeriesRegistry.js"],r["Series/Variwide/VariwidePoint.js"],r["Core/Utilities.js"]],(function(t,r,e){var o,n=this&&this.__extends||(o=function(t,b){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},o(t,b)},function(t,b){function r(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(r.prototype=b.prototype,new r)}),h=t.seriesTypes.column,c=e.extend,l=e.merge,d=e.pick,f=function(r){function e(){var t=null!==r&&r.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t.relZ=void 0,t.totalZ=void 0,t.zData=void 0,t}return n(e,r),e.prototype.processData=function(r){this.totalZ=0,this.relZ=[],t.seriesTypes.column.prototype.processData.call(this,r),(this.xAxis.reversed?this.zData.slice().reverse():this.zData).forEach((function(t,i){this.relZ[i]=this.totalZ,this.totalZ+=t}),this),this.xAxis.categories&&(this.xAxis.variwide=!0,this.xAxis.zData=this.zData)},e.prototype.postTranslate=function(t,r,e){var o=this.xAxis,n=this.relZ,i=o.reversed?n.length-t:t,h=o.reversed?-1:1,c=o.toPixels(o.reversed?(o.dataMax||0)+o.pointRange:o.dataMin||0),l=o.toPixels(o.reversed?o.dataMin||0:(o.dataMax||0)+o.pointRange),f=Math.abs(l-c),v=this.totalZ,y=this.chart.inverted?l-(this.chart.plotTop-h*o.minPixelPadding):c-this.chart.plotLeft-h*o.minPixelPadding,x=i/n.length*f,w=(i+h)/n.length*f,A=d(n[i],v)/v*f,_=d(n[i+h],v)/v*f,P=r-(y+x);return e&&(e.crosshairWidth=_-A),y+A+P*(_-A)/(w-x)},e.prototype.translate=function(){var r=this.options.crisp,e=this.xAxis;this.options.crisp=!1,t.seriesTypes.column.prototype.translate.call(this),this.options.crisp=r;var o=this.chart.inverted,n=this.borderWidth%2/2;this.points.forEach((function(t,i){var r,h;e.variwide?(r=this.postTranslate(i,t.shapeArgs.x,t),h=this.postTranslate(i,t.shapeArgs.x+t.shapeArgs.width)):(r=t.plotX,h=e.translate(t.x+t.z,0,0,0,1)),this.options.crisp&&(r=Math.round(r)-n,h=Math.round(h)-n),t.shapeArgs.x=r,t.shapeArgs.width=Math.max(h-r,1),t.plotX=(r+h)/2,o?t.tooltipPos[1]=e.len-t.shapeArgs.x-t.shapeArgs.width/2:t.tooltipPos[0]=t.shapeArgs.x+t.shapeArgs.width/2}),this),this.options.stacking&&this.correctStackLabels()},e.prototype.correctStackLabels=function(){var t,r,e,o,n=this,h=n.options,c=n.yAxis;n.points.forEach((function(l){o=l.x,r=l.shapeArgs.width,(e=c.stacking.stacks[(n.negStacks&&l.y<(h.startFromThreshold?0:h.threshold)?"-":"")+n.stackKey])&&(t=e[o])&&!l.isNull&&t.setOffset(-r/2||0,r||0,void 0,void 0,l.plotX)}))},e.defaultOptions=l(h.defaultOptions,{pointPadding:0,groupPadding:0}),e}(h);return c(f.prototype,{irregularWidths:!0,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],pointClass:r}),t.registerSeriesType("variwide",f),f})),e(r,"masters/modules/variwide.src.js",[],(function(){}))},t.exports?(h.default=h,t.exports=h):(o=[e(131)],void 0===(n=function(t){return h(t),h.Highcharts=t,h}.apply(r,o))||(t.exports=n))}}]);