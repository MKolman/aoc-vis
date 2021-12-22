/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{338:function(t,e,o){"use strict";var r,n,h;h=function(t){var e=t?t._modules:{};function o(t,path,e,o){t.hasOwnProperty(path)||(t[path]=o.apply(null,e))}o(e,"Extensions/SeriesLabel.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Chart/Chart.js"],e["Core/FormatUtilities.js"],e["Core/DefaultOptions.js"],e["Core/Series/Series.js"],e["Core/Renderer/SVG/SVGRenderer.js"],e["Core/Utilities.js"]],(function(t,e,o,r,n,h,l){var c=t.animObject,d=o.format,f=r.setOptions,x=h.prototype.symbols,m=l.addEvent,y=l.extend,w=l.fireEvent,Y=l.isNumber,X=l.pick,M=l.syncTimeout;function v(t,e,o,r,n,h){var l=(h-e)*(o-t)-(r-e)*(n-t);return l>0||!(l<0)}function S(t,e,o,r,n,h,l,c){return v(t,e,n,h,l,c)!==v(o,r,n,h,l,c)&&v(t,e,o,r,n,h)!==v(t,e,o,r,l,c)}function A(t,e,o,r,n,h,l,c){return S(t,e,t+o,e,n,h,l,c)||S(t+o,e,t+o,e+r,n,h,l,c)||S(t,e+r,t+o,e+r,n,h,l,c)||S(t,e,t,e+r,n,h,l,c)}function C(t){if(this.renderer){var e=this,o=c(e.renderer.globalAnimation).duration;e.labelSeries=[],e.labelSeriesMaxSum=0,l.clearTimeout(e.seriesLabelTimer),e.series.forEach((function(r){var n=r.options.label,label=r.labelBySeries,h=label&&label.closest;n.enabled&&r.visible&&(r.graph||r.area)&&!r.isSeriesBoosting&&(e.labelSeries.push(r),n.minFontSize&&n.maxFontSize&&(r.sum=r.yData.reduce((function(t,e){return(t||0)+(e||0)}),0),e.labelSeriesMaxSum=Math.max(e.labelSeriesMaxSum,r.sum)),"load"===t.type&&(o=Math.max(o,c(r.options.animation).duration)),h&&(void 0!==h[0].plotX?label.animate({x:h[0].plotX+h[1],y:h[0].plotY+h[2]}):label.attr({opacity:0})))})),e.seriesLabelTimer=M((function(){e.series&&e.labelSeries&&e.drawSeriesLabels()}),e.renderer.forExport||!o?0:o)}}f({plotOptions:{series:{label:{enabled:!0,connectorAllowed:!1,connectorNeighbourDistance:24,format:void 0,formatter:void 0,minFontSize:null,maxFontSize:null,onArea:null,style:{fontWeight:"bold"},boxesToAvoid:[]}}}}),x.connector=function(t,e,o,r,n){var path,h,l=n&&n.anchorX,c=n&&n.anchorY,d=o/2;return Y(l)&&Y(c)&&(path=[["M",l,c]],(h=e-c)<0&&(h=-r-h),h<o&&(d=l<t+o/2?h:o-h),c>e+r?path.push(["L",t+d,e+r]):c<e?path.push(["L",t+d,e]):l<t?path.push(["L",t,e+r/2]):l>t+o&&path.push(["L",t+o,e+r/2])),path||[]},n.prototype.getPointsOnGraph=function(){if(this.xAxis||this.yAxis){var t,e,i,o,r,n,h,l,c,d,f=this.points,x=[],m=this.graph||this.area,y=m.element,w=this.chart.inverted,M=this.xAxis,v=this.yAxis,S=w?v.pos:M.pos,A=w?M.pos:v.pos,C=X(this.options.label.onArea,!!this.area),P=v.getThreshold(this.options.threshold),L={};if(this.getPointSpline&&y.getPointAtLength&&!C&&f.length<this.chart.plotSizeX/16){for(m.toD&&(d=m.attr("d"),m.attr({d:m.toD})),h=y.getTotalLength(),i=0;i<h;i+=16)T({chartX:S+(t=y.getPointAtLength(i)).x,chartY:A+t.y,plotX:t.x,plotY:t.y});d&&m.attr({d:d}),(t=f[f.length-1]).chartX=S+t.plotX,t.chartY=A+t.plotY,T(t)}else for(h=f.length,i=0;i<h;i+=1){if(t=f[i],e=f[i-1],t.chartX=S+t.plotX,t.chartY=A+t.plotY,C&&(t.chartCenterY=A+(t.plotY+X(t.yBottom,P))/2),i>0&&(o=Math.abs(t.chartX-e.chartX),r=Math.abs(t.chartY-e.chartY),(n=Math.max(o,r))>16))for(l=Math.ceil(n/16),c=1;c<l;c+=1)T({chartX:e.chartX+(t.chartX-e.chartX)*(c/l),chartY:e.chartY+(t.chartY-e.chartY)*(c/l),chartCenterY:e.chartCenterY+(t.chartCenterY-e.chartCenterY)*(c/l),plotX:e.plotX+(t.plotX-e.plotX)*(c/l),plotY:e.plotY+(t.plotY-e.plotY)*(c/l)});Y(t.plotY)&&T(t)}return x}function T(t){var e=Math.round(t.plotX/8)+","+Math.round(t.plotY/8);L[e]||(L[e]=1,x.push(t))}},n.prototype.labelFontSize=function(t,e){return t+this.sum/this.chart.labelSeriesMaxSum*(e-t)+"px"},n.prototype.checkClearPoint=function(t,e,o,r){var n,h,l,c,d,f,x,i,m,y,w,Y=this.chart,M=X(this.options.label.onArea,!!this.area),v=M||this.options.label.connectorAllowed,S=16,C=Number.MAX_VALUE,P=Number.MAX_VALUE;for(i=0;i<Y.boxesToAvoid.length;i+=1)if(y=Y.boxesToAvoid[i],!((w={left:t,right:t+o.width,top:e,bottom:e+o.height}).left>y.right||w.right<y.left||w.top>y.bottom||w.bottom<y.top))return!1;for(i=0;i<Y.series.length;i+=1)if(c=(l=Y.series[i]).interpolatedPoints,l.visible&&c){for(m=1;m<c.length;m+=1){if(c[m].chartX>=t-S&&c[m-1].chartX<=t+o.width+S){if(A(t,e,o.width,o.height,c[m-1].chartX,c[m-1].chartY,c[m].chartX,c[m].chartY))return!1;this===l&&!d&&r&&(d=A(t-S,e-S,o.width+32,o.height+32,c[m-1].chartX,c[m-1].chartY,c[m].chartX,c[m].chartY))}!v&&!d||this===l&&!M||(f=t+o.width/2-c[m].chartX,x=e+o.height/2-c[m].chartY,C=Math.min(C,f*f+x*x))}if(!M&&v&&this===l&&(r&&!d||C<Math.pow(this.options.label.connectorNeighbourDistance,2))){for(m=1;m<c.length;m+=1)(n=Math.min(Math.pow(t+o.width/2-c[m].chartX,2)+Math.pow(e+o.height/2-c[m].chartY,2),Math.pow(t-c[m].chartX,2)+Math.pow(e-c[m].chartY,2),Math.pow(t+o.width-c[m].chartX,2)+Math.pow(e-c[m].chartY,2),Math.pow(t+o.width-c[m].chartX,2)+Math.pow(e+o.height-c[m].chartY,2),Math.pow(t-c[m].chartX,2)+Math.pow(e+o.height-c[m].chartY,2)))<P&&(P=n,h=c[m]);d=!0}}return!(r&&!d)&&{x:t,y:e,weight:function(t,e){return t-e}(C,h?P:0),connectorPoint:h}},e.prototype.drawSeriesLabels=function(){var t=this,e=this.labelSeries;t.boxesToAvoid=[],e.forEach((function(e){e.interpolatedPoints=e.getPointsOnGraph(),(e.options.label.boxesToAvoid||[]).forEach((function(e){t.boxesToAvoid.push(e)}))})),t.series.forEach((function(e){var o=e.options.label;if(o&&(e.xAxis||e.yAxis)){var r,n,h,l,i,f,x,m,w,Y="highcharts-color-"+X(e.colorIndex,"none"),M=!e.labelBySeries,v=o.minFontSize,S=o.maxFontSize,A=t.inverted,C=A?e.yAxis.pos:e.xAxis.pos,P=A?e.xAxis.pos:e.yAxis.pos,L=t.inverted?e.yAxis.len:e.xAxis.len,T=t.inverted?e.xAxis.len:e.yAxis.len,k=e.interpolatedPoints,B=X(o.onArea,!!e.area),E=[],label=e.labelBySeries;if(B&&!A&&(x=[e.xAxis.toPixels(e.xData[0]),e.xAxis.toPixels(e.xData[e.xData.length-1])],m=Math.min.apply(Math,x),w=Math.max.apply(Math,x)),e.visible&&!e.isSeriesBoosting&&k){if(!label){var z=e.name;"string"==typeof o.format?z=d(o.format,e,t):o.formatter&&(z=o.formatter.call(e)),e.labelBySeries=label=t.renderer.label(z,0,-9999,"connector").addClass("highcharts-series-label highcharts-series-label-"+e.index+" "+(e.options.className||"")+" "+Y),t.renderer.styledMode||(label.css(y({color:B?t.renderer.getContrast(e.color):e.color},o.style||{})),label.attr({opacity:t.renderer.forExport?1:0,stroke:e.color,"stroke-width":1})),v&&S&&label.css({fontSize:e.labelFontSize(v,S)}),label.attr({padding:0,zIndex:3}).add()}for((r=label.getBBox()).width=Math.round(r.width),i=k.length-1;i>0;i-=1)B?(U(n=k[i].chartX-r.width/2,h=k[i].chartCenterY-r.height/2,r)&&(f=e.checkClearPoint(n,h,r)),f&&E.push(f)):(U(n=k[i].chartX+3,h=k[i].chartY-r.height-3,r)&&(f=e.checkClearPoint(n,h,r,!0)),f&&E.push(f),U(n=k[i].chartX+3,h=k[i].chartY+3,r)&&(f=e.checkClearPoint(n,h,r,!0)),f&&E.push(f),U(n=k[i].chartX-r.width-3,h=k[i].chartY+3,r)&&(f=e.checkClearPoint(n,h,r,!0)),f&&E.push(f),U(n=k[i].chartX-r.width-3,h=k[i].chartY-r.height-3,r)&&(f=e.checkClearPoint(n,h,r,!0)),f&&E.push(f));if(o.connectorAllowed&&!E.length&&!B)for(n=C+L-r.width;n>=C;n-=16)for(h=P;h<P+T-r.height;h+=16)(l=e.checkClearPoint(n,h,r,!0))&&E.push(l);if(E.length){E.sort((function(a,b){return b.weight-a.weight})),f=E[0],t.boxesToAvoid.push({left:f.x,right:f.x+r.width,top:f.y,bottom:f.y+r.height});var D=Math.sqrt(Math.pow(Math.abs(f.x-(label.x||0)),2)+Math.pow(Math.abs(f.y-(label.y||0)),2));if(D&&e.labelBySeries){var j={opacity:t.renderer.forExport?1:0,x:f.x,y:f.y},F={opacity:1};D<=10&&(F={x:j.x,y:j.y},j={});var N=void 0;M&&((N=c(e.options.animation)).duration*=.2),e.labelBySeries.attr(y(j,{anchorX:f.connectorPoint&&f.connectorPoint.plotX+C,anchorY:f.connectorPoint&&f.connectorPoint.plotY+P})).animate(F,N),e.options.kdNow=!0,e.buildKDTree();var O=e.searchPoint({chartX:f.x,chartY:f.y},!0);O&&(label.closest=[O,f.x-(O.plotX||0),f.y-(O.plotY||0)])}}else G()}else G()}function U(t,e,o){var r=Math.max(C,X(m,-1/0)),n=Math.min(C+L,X(w,1/0));return t>r&&t<=n-o.width&&e>=P&&e<=P+T-o.height}function G(){label&&(e.labelBySeries=label.destroy())}})),w(t,"afterDrawSeriesLabels")},m(e,"load",C),m(e,"redraw",C)})),o(e,"masters/modules/series-label.src.js",[],(function(){}))},t.exports?(h.default=h,t.exports=h):(r=[o(131)],void 0===(n=function(t){return h(t),h.Highcharts=t,h}.apply(e,r))||(t.exports=n))}}]);