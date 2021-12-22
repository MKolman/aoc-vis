/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{261:function(t,o,e){"use strict";var r,n,l;l=function(t){var o=t?t._modules:{};function e(t,path,o,e){t.hasOwnProperty(path)||(t[path]=e.apply(null,o))}e(o,"Core/Axis/Color/ColorAxisComposition.js",[o["Core/Color/Color.js"],o["Core/Utilities.js"]],(function(t,o){var e,r=t.parse,n=o.addEvent,l=o.extend,c=o.merge,d=o.pick,h=o.splat;return function(t){var o,e=[];function f(){var t=this,e=this.options;this.colorAxis=[],e.colorAxis&&(e.colorAxis=h(e.colorAxis),e.colorAxis.forEach((function(e,i){e.index=i,new o(t,e)})))}function y(t){var o,i,e=this,r=this.chart.colorAxis||[],n=function(o){var i=t.allItems.indexOf(o);-1!==i&&(e.destroyItem(t.allItems[i]),t.allItems.splice(i,1))},l=[];for(r.forEach((function(t){(o=t.options)&&o.showInLegend&&(o.dataClasses&&o.visible?l=l.concat(t.getDataClassLegendSymbols()):o.visible&&l.push(t),t.series.forEach((function(t){t.options.showInLegend&&!o.dataClasses||("point"===t.options.legendType?t.points.forEach((function(t){n(t)})):n(t))})))})),i=l.length;i--;)t.allItems.unshift(l[i])}function m(t){t.visible&&t.item.legendColor&&t.item.legendSymbol.attr({fill:t.item.legendColor})}function x(){var t=this.chart.colorAxis;t&&t.forEach((function(t){t.update({},arguments[2])}))}function C(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function v(){var t=this.axisTypes;t?-1===t.indexOf("colorAxis")&&t.push("colorAxis"):this.axisTypes=["colorAxis"]}function A(t){var o=this,e=t?"show":"hide";o.visible=o.options.visible=Boolean(t),["graphic","dataLabel"].forEach((function(t){o[t]&&o[t][e]()})),this.series.buildKDTree()}function I(){var t=this,o=this.data.length?this.data:this.points,e=this.options.nullColor,r=this.colorAxis,n=this.colorKey;o.forEach((function(o){var l=o.getNestedProperty(n),c=o.options.color||(o.isNull||null===o.value?e:r&&void 0!==l?r.toColor(l,o):o.color||t.color);c&&o.color!==c&&(o.color=c,"point"===t.options.legendType&&o.legendItem&&t.chart.legend.colorizeItem(o,o.visible))}))}function L(){this.elem.attr("fill",r(this.start).tweenTo(r(this.end),this.pos),void 0,!0)}function w(){this.elem.attr("stroke",r(this.start).tweenTo(r(this.end),this.pos),void 0,!0)}t.compose=function(t,r,h,E,O){if(o||(o=t),-1===e.indexOf(r)){e.push(r);var S=r.prototype;S.collectionsWithUpdate.push("colorAxis"),S.collectionsWithInit.colorAxis=[S.addColorAxis],n(r,"afterGetAxes",f),function(t){var e=t.prototype.createAxis;t.prototype.createAxis=function(t,r){if("colorAxis"!==t)return e.apply(this,arguments);var n=new o(this,c(r.axis,{index:this[t].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach((function(t){t.series=[]})),this.series.forEach((function(t){t.bindAxes(),t.isDirtyData=!0})),d(r.redraw,!0)&&this.redraw(r.animation),n}}(r)}if(-1===e.indexOf(h)){e.push(h);var D=h.prototype;D.fillSetter=L,D.strokeSetter=w}-1===e.indexOf(E)&&(e.push(E),n(E,"afterGetAllItems",y),n(E,"afterColorizeItem",m),n(E,"afterUpdate",x)),-1===e.indexOf(O)&&(e.push(O),l(O.prototype,{optionalAxis:"colorAxis",translateColors:I}),l(O.prototype.pointClass.prototype,{setVisible:A}),n(O,"afterTranslate",C),n(O,"bindAxes",v))},t.pointSetVisible=A}(e||(e={})),e})),e(o,"Core/Axis/Color/ColorAxisDefaults.js",[],(function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0}})),e(o,"Core/Axis/Color/ColorAxis.js",[o["Core/Axis/Axis.js"],o["Core/Color/Color.js"],o["Core/Axis/Color/ColorAxisComposition.js"],o["Core/Axis/Color/ColorAxisDefaults.js"],o["Core/Globals.js"],o["Core/Legend/LegendSymbol.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],(function(t,o,e,r,n,l,c,d){var h,f=this&&this.__extends||(h=function(t,b){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},h(t,b)},function(t,b){function o(){this.constructor=t}h(t,b),t.prototype=null===b?Object.create(b):(o.prototype=b.prototype,new o)}),y=o.parse,m=n.noop,x=c.series,C=d.extend,v=d.isNumber,A=d.merge,I=d.pick,L=function(t){function o(o,e){var r=t.call(this,o,e)||this;return r.beforePadding=!1,r.chart=void 0,r.coll="colorAxis",r.dataClasses=void 0,r.legendItem=void 0,r.legendItems=void 0,r.name="",r.options=void 0,r.stops=void 0,r.visible=!0,r.init(o,e),r}return f(o,t),o.compose=function(t,r,n,l){e.compose(o,t,r,n,l)},o.prototype.init=function(e,r){var n=this,legend=e.options.legend||{},l=r.layout?"vertical"!==r.layout:"vertical"!==legend.layout,c=r.visible,d=A(o.defaultColorAxisOptions,r,{showEmpty:!1,title:null,visible:legend.enabled&&!1!==c});n.coll="colorAxis",n.side=r.side||l?2:1,n.reversed=r.reversed||!l,n.opposite=!l,t.prototype.init.call(this,e,d),n.userOptions.visible=c,r.dataClasses&&n.initDataClasses(r),n.initStops(),n.horiz=l,n.zoomEnabled=!1},o.prototype.initDataClasses=function(t){var o,e=this,r=e.chart,n=e.options,l=t.dataClasses.length,c=0,d=r.options.chart.colorCount;e.dataClasses=o=[],e.legendItems=[],(t.dataClasses||[]).forEach((function(t,i){var e;t=A(t),o.push(t),!r.styledMode&&t.color||("category"===n.dataClassColor?(r.styledMode||(e=r.options.colors,d=e.length,t.color=e[c]),t.colorIndex=c,++c===d&&(c=0)):t.color=y(n.minColor).tweenTo(y(n.maxColor),l<2?.5:i/(l-1)))}))},o.prototype.hasData=function(){return!!(this.tickPositions||[]).length},o.prototype.setTickPositions=function(){if(!this.dataClasses)return t.prototype.setTickPositions.call(this)},o.prototype.initStops=function(){var t=this;t.stops=t.options.stops||[[0,t.options.minColor],[1,t.options.maxColor]],t.stops.forEach((function(t){t.color=y(t[1])}))},o.prototype.setOptions=function(o){t.prototype.setOptions.call(this,o),this.options.crosshair=this.options.marker},o.prototype.setAxisSize=function(){var t,e,r,n,symbol=this.legendSymbol,l=this.chart,c=l.options.legend||{};symbol?(this.left=t=symbol.attr("x"),this.top=e=symbol.attr("y"),this.width=r=symbol.attr("width"),this.height=n=symbol.attr("height"),this.right=l.chartWidth-t-r,this.bottom=l.chartHeight-e-n,this.len=this.horiz?r:n,this.pos=this.horiz?t:e):this.len=(this.horiz?c.symbolWidth:c.symbolHeight)||o.defaultLegendLength},o.prototype.normalizedValue=function(t){var o=this;return o.logarithmic&&(t=o.logarithmic.log2lin(t)),1-(o.max-t)/(o.max-o.min||1)},o.prototype.toColor=function(t,o){var e,r,n,l,c,i,d=this,h=d.dataClasses,f=d.stops;if(h){for(i=h.length;i--;)if(r=(c=h[i]).from,n=c.to,(void 0===r||t>=r)&&(void 0===n||t<=n)){l=c.color,o&&(o.dataClass=i,o.colorIndex=c.colorIndex);break}}else{for(e=d.normalizedValue(t),i=f.length;i--&&!(e>f[i][0]););r=f[i]||f[i+1],e=1-((n=f[i+1]||r)[0]-e)/(n[0]-r[0]||1),l=r.color.tweenTo(n.color,e)}return l},o.prototype.getOffset=function(){var o=this,e=o.legendGroup,r=o.chart.axisOffset[o.side];e&&(o.axisParent=e,t.prototype.getOffset.call(this),o.added||(o.added=!0,o.labelLeft=0,o.labelRight=o.width),o.chart.axisOffset[o.side]=r)},o.prototype.setLegendColor=function(){var t=this,o=t.horiz,e=t.reversed,r=e?1:0,n=e?0:1,l=o?[r,0,n,0]:[0,n,0,r];t.legendColor={linearGradient:{x1:l[0],y1:l[1],x2:l[2],y2:l[3]},stops:t.stops}},o.prototype.drawLegendSymbol=function(legend,t){var e=this,r=legend.padding,n=legend.options,l=e.horiz,c=I(n.symbolWidth,l?o.defaultLegendLength:12),d=I(n.symbolHeight,l?12:o.defaultLegendLength),h=I(n.labelPadding,l?16:30),f=I(n.itemDistance,10);this.setLegendColor(),t.legendSymbol=this.chart.renderer.rect(0,legend.baseline-11,c,d).attr({zIndex:1}).add(t.legendGroup),e.legendItemWidth=c+r+(l?f:h),e.legendItemHeight=d+r+(l?h:0)},o.prototype.setState=function(t){this.series.forEach((function(o){o.setState(t)}))},o.prototype.setVisible=function(){},o.prototype.getSeriesExtremes=function(){var t,o,e,r,n,l,c,d,h=this.series,i=h.length;for(this.dataMin=1/0,this.dataMax=-1/0;i--;){if(o=(l=h[i]).colorKey=I(l.options.colorKey,l.colorKey,l.pointValKey,l.zoneAxis,"y"),r=l.pointArrayMap,n=l[o+"Min"]&&l[o+"Max"],l[o+"Data"])t=l[o+"Data"];else if(r){if(t=[],e=r.indexOf(o),c=l.yData,e>=0&&c)for(d=0;d<c.length;d++)t.push(I(c[d][e],c[d]))}else t=l.yData;if(n)l.minColorValue=l[o+"Min"],l.maxColorValue=l[o+"Max"];else{var f=x.prototype.getExtremes.call(l,t);l.minColorValue=f.dataMin,l.maxColorValue=f.dataMax}void 0!==l.minColorValue&&(this.dataMin=Math.min(this.dataMin,l.minColorValue),this.dataMax=Math.max(this.dataMax,l.maxColorValue)),n||x.prototype.applyExtremes.call(l)}},o.prototype.drawCrosshair=function(o,e){var r,n=this,l=e&&e.plotX,c=e&&e.plotY,d=n.pos,h=n.len;e&&((r=n.toPixels(e.getNestedProperty(e.series.colorKey)))<d?r=d-2:r>d+h&&(r=d+h+2),e.plotX=r,e.plotY=n.len-r,t.prototype.drawCrosshair.call(this,o,e),e.plotX=l,e.plotY=c,n.cross&&!n.cross.addedToColorAxis&&n.legendGroup&&(n.cross.addClass("highcharts-coloraxis-marker").add(n.legendGroup),n.cross.addedToColorAxis=!0,n.chart.styledMode||"object"!=typeof n.crosshair||n.cross.attr({fill:n.crosshair.color})))},o.prototype.getPlotLinePath=function(o){var e=this,r=e.left,n=o.translatedValue,l=e.top;return v(n)?e.horiz?[["M",n-4,l-6],["L",n+4,l-6],["L",n,l],["Z"]]:[["M",r,n],["L",r-6,n+6],["L",r-6,n-6],["Z"]]:t.prototype.getPlotLinePath.call(this,o)},o.prototype.update=function(o,e){var r=this,legend=r.chart.legend;this.series.forEach((function(t){t.isDirtyData=!0})),(o.dataClasses&&legend.allItems||r.dataClasses)&&r.destroyItems(),t.prototype.update.call(this,o,e),r.legendItem&&(r.setLegendColor(),legend.colorizeItem(this,!0))},o.prototype.destroyItems=function(){var t=this,o=t.chart;t.legendItem?o.legend.destroyItem(t):t.legendItems&&t.legendItems.forEach((function(t){o.legend.destroyItem(t)})),o.isDirtyLegend=!0},o.prototype.destroy=function(){this.chart.isDirtyLegend=!0,this.destroyItems(),t.prototype.destroy.apply(this,[].slice.call(arguments))},o.prototype.remove=function(o){this.destroyItems(),t.prototype.remove.call(this,o)},o.prototype.getDataClassLegendSymbols=function(){var t,o=this,e=o.chart,r=o.legendItems,n=e.options.legend,c=n.valueDecimals,d=n.valueSuffix||"";return r.length||o.dataClasses.forEach((function(n,i){var h=n.from,f=n.to,y=e.numberFormatter,x=!0;t="",void 0===h?t="< ":void 0===f&&(t="> "),void 0!==h&&(t+=y(h,c)+d),void 0!==h&&void 0!==f&&(t+=" - "),void 0!==f&&(t+=y(f,c)+d),r.push(C({chart:e,name:t,options:{},drawLegendSymbol:l.drawRectangle,visible:!0,setState:m,isDataClass:!0,setVisible:function(){x=o.visible=!x,o.series.forEach((function(t){t.points.forEach((function(t){t.dataClass===i&&t.setVisible(x)}))})),e.legend.colorizeItem(this,x)}},n))})),r},o.defaultColorAxisOptions=r,o.defaultLegendLength=200,o.keepProps=["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"],o}(t);return Array.prototype.push.apply(t.keepProps,L.keepProps),L})),e(o,"masters/modules/coloraxis.src.js",[o["Core/Globals.js"],o["Core/Axis/Color/ColorAxis.js"]],(function(t,o){var e=t;e.ColorAxis=o,o.compose(e.Chart,e.Fx,e.Legend,e.Series)}))},t.exports?(l.default=l,t.exports=l):(r=[e(131)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,r))||(t.exports=n))}}]);