/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{268:function(t,o,e){"use strict";var r,n,l;l=function(t){var o=t?t._modules:{};function e(t,path,o,e){t.hasOwnProperty(path)||(t[path]=e.apply(null,o))}e(o,"Extensions/DataGrouping.js",[o["Core/Axis/Axis.js"],o["Core/Axis/DateTimeAxis.js"],o["Core/FormatUtilities.js"],o["Core/Globals.js"],o["Core/Series/Point.js"],o["Core/Series/Series.js"],o["Core/Tooltip.js"],o["Core/DefaultOptions.js"],o["Core/Utilities.js"]],(function(t,o,e,r,n,l,d,h,c){var f=e.format,m=l.prototype,x=c.addEvent,D=c.arrayMax,G=c.arrayMin,y=c.correctFloat,v=c.defined,M=c.error,A=c.extend,P=c.isNumber,S=c.merge,W=c.pick,k=r.approximations={sum:function(t){var o,e=t.length;if(!e&&t.hasNulls)o=null;else if(e)for(o=0;e--;)o+=t[e];return o},average:function(t){var o=t.length,e=k.sum(t);return P(e)&&o&&(e=y(e/o)),e},averages:function(){var t=[];return[].forEach.call(arguments,(function(o){t.push(k.average(o))})),void 0===t[0]?void 0:t},open:function(t){return t.length?t[0]:t.hasNulls?null:void 0},high:function(t){return t.length?D(t):t.hasNulls?null:void 0},low:function(t){return t.length?G(t):t.hasNulls?null:void 0},close:function(t){return t.length?t[t.length-1]:t.hasNulls?null:void 0},hlc:function(t,o,e){if(t=k.high(t),o=k.low(o),e=k.close(e),P(t)||P(o)||P(e))return[t,o,e]},ohlc:function(t,o,e,r){if(t=k.open(t),o=k.high(o),e=k.low(e),r=k.close(r),P(t)||P(o)||P(e)||P(r))return[t,o,e,r]},range:function(t,o){return t=k.low(t),o=k.high(o),P(t)||P(o)?[t,o]:null===t&&null===o?null:void 0}},C=function(t,o){return!(t.isCartesian&&!t.isDirty&&!t.xAxis.isDirty&&!t.yAxis.isDirty&&!o)},F=function(t,o,e,r){var n,l,d,h,c,i,f,m,x=this,data=x.data,D=x.options&&x.options.data,G=[],y=[],M=[],A=t.length,W=!!o,C=[],F=x.pointArrayMap,w=F&&F.length,H=["x"].concat(F||["y"]),j=this.options.dataGrouping&&this.options.dataGrouping.groupAll,O=0,T=0;for(h="function"==typeof(m=r)?m:k[m]?k[m]:k[x.getDGApproximation&&x.getDGApproximation()||"average"],w?F.forEach((function(){C.push([])})):C.push([]),c=w||1,i=0;i<=A&&!(t[i]>=e[0]);i++);for(;i<=A;i++){for(;void 0!==e[O+1]&&t[i]>=e[O+1]||i===A;){for(n=e[O],x.dataGroupInfo={start:j?T:x.cropStart+T,length:C[0].length},d=h.apply(x,C),x.pointClass&&!v(x.dataGroupInfo.options)&&(x.dataGroupInfo.options=S(x.pointClass.prototype.optionsToObject.call({series:x},x.options.data[x.cropStart+T])),H.forEach((function(t){delete x.dataGroupInfo.options[t]}))),void 0!==d&&(G.push(n),y.push(d),M.push(x.dataGroupInfo)),T=i,f=0;f<c;f++)C[f].length=0,C[f].hasNulls=!1;if(O+=1,i===A)break}if(i===A)break;if(F){var Y=x.options.dataGrouping&&x.options.dataGrouping.groupAll?i:x.cropStart+i,E=data&&data[Y]||x.pointClass.prototype.applyOptions.apply({series:x},[D[Y]]),N=void 0;for(f=0;f<w;f++)N=E[F[f]],P(N)?C[f].push(N):null===N&&(C[f].hasNulls=!0)}else l=W?o[i]:null,P(l)?C[0].push(l):null===l&&(C[0].hasNulls=!0)}return{groupedXData:G,groupedYData:y,groupMap:M}},w=function(t,o,e){var i,r=t.options.dataGrouping,n=t.currentDataGrouping&&t.currentDataGrouping.gapSize;if(r&&t.xData&&n&&t.groupMap){var l=o.length-1,d=r.anchor,h=W(r.firstAnchor,d),c=W(r.lastAnchor,d);if(d&&"start"!==d){var f=n*{middle:.5,end:1}[d];for(i=o.length-1;i--&&i>0;)o[i]+=f}if(h&&"start"!==h&&t.xData[0]>=o[0]){var m=t.groupMap[0].start,x=t.groupMap[0].length,D=void 0;P(m)&&P(x)&&(D=m+(x-1)),o[0]={middle:o[0]+.5*n,end:o[0]+n,firstPoint:t.xData[0],lastPoint:D&&t.xData[D]}[h]}if(c&&"start"!==c&&n&&o[l]>=e-n){var G=t.groupMap[t.groupMap.length-1].start;o[l]={middle:o[l]+.5*n,end:o[l]+n,firstPoint:G&&t.xData[G],lastPoint:t.xData[t.xData.length-1]}[c]}}},H=function(t,o){v(o[0])&&P(t.min)&&P(t.dataMin)&&o[0]<t.min&&((!v(t.options.min)&&t.min<=t.dataMin||t.min===t.dataMin)&&(t.min=Math.min(o[0],t.min)),t.dataMin=Math.min(o[0],t.dataMin)),v(o[o.length-1])&&P(t.max)&&P(t.dataMax)&&o[o.length-1]>t.max&&((!v(t.options.max)&&P(t.dataMax)&&t.max>=t.dataMax||t.max===t.dataMax)&&(t.max=Math.max(o[o.length-1],t.max)),t.dataMax=Math.max(o[o.length-1],t.dataMax))},j={approximations:k,groupData:F},O=(m.processData,m.generatePoints),T={groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},Y={line:{},spline:{},area:{},areaspline:{},arearange:{},column:{groupPixelWidth:10},columnrange:{groupPixelWidth:10},candlestick:{groupPixelWidth:10},ohlc:{groupPixelWidth:5},hlc:{groupPixelWidth:5},heikinashi:{groupPixelWidth:10}},E=r.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]];return m.getDGApproximation=function(){return this.is("arearange")?"range":this.is("ohlc")?"ohlc":this.is("hlc")?"hlc":this.is("column")?"sum":"average"},m.groupData=F,m.applyGrouping=function(t){var e,r,n,l,d=this,h=d.chart,c=d.options.dataGrouping,f=!1!==d.allowDG&&c&&W(c.enabled,h.options.isStock),x=d.visible||!h.options.chart.ignoreHiddenSeries,D=this.currentDataGrouping,G=!1;if(f&&!d.requireSorting&&(d.requireSorting=G=!0),r=!1===C(d,t)||!f,G&&(d.requireSorting=!1),!r){d.destroyGroupedData();var i=void 0,y=c.groupAll?d.xData:d.processedXData,v=c.groupAll?d.yData:d.processedYData,A=h.plotSizeX,P=d.xAxis,S=P.options.ordinal,k=d.groupPixelWidth;if(k&&y&&y.length){e=!0,d.isDirty=!0,d.points=null;var F=P.getExtremes(),j=F.min,O=F.max,T=k*(O-j)/A*(S&&P.ordinal&&P.ordinal.getGroupIntervalFactor(j,O,d)||1),Y=P.getTimeTicks(o.Additions.prototype.normalizeTimeTickInterval(T,c.units||E),Math.min(j,y[0]),Math.max(O,y[y.length-1]),P.options.startOfWeek,y,d.closestPointRange),N=m.groupData.apply(d,[y,v,Y,c.approximation]),I=N.groupedXData,X=N.groupedYData,L=0;for(c&&c.smoothed&&I.length&&(c.firstAnchor="firstPoint",c.anchor="middle",c.lastAnchor="lastPoint",M(32,!1,h,{"dataGrouping.smoothed":"use dataGrouping.anchor"})),w(d,I,O),i=1;i<Y.length;i++)Y.info.segmentStarts&&-1!==Y.info.segmentStarts.indexOf(i)||(L=Math.max(Y[i]-Y[i-1],L));(n=Y.info).gapSize=L,d.closestPointRange=Y.info.totalRange,d.groupMap=N.groupMap,x&&H(P,I),c.groupAll&&(d.allGroupedData=X,I=(l=d.cropData(I,X,P.min,P.max,1)).xData,X=l.yData,d.cropStart=l.start),d.processedXData=I,d.processedYData=X}else d.groupMap=null;d.hasGroupedData=e,d.currentDataGrouping=n,d.preventGraphAnimation=(D&&D.totalRange)!==(n&&n.totalRange)}},m.destroyGroupedData=function(){this.groupedData&&(this.groupedData.forEach((function(t,i){t&&(this.groupedData[i]=t.destroy?t.destroy():null)}),this),this.groupedData.length=0)},m.generatePoints=function(){O.apply(this),this.destroyGroupedData(),this.groupedData=this.hasGroupedData?this.points:null},t.prototype.applyGrouping=function(t){var o=this;o.series.forEach((function(e){e.groupPixelWidth=void 0,e.groupPixelWidth=o.getGroupPixelWidth&&o.getGroupPixelWidth(),e.groupPixelWidth&&(e.hasProcessed=!0),e.applyGrouping(!!t.hasExtemesChanged)}))},t.prototype.getGroupPixelWidth=function(){var i,t,o,e=this.series,r=e.length,n=0,l=!1;for(i=r;i--;)(o=e[i].options.dataGrouping)&&(n=Math.max(n,W(o.groupPixelWidth,T.groupPixelWidth)));for(i=r;i--;)(o=e[i].options.dataGrouping)&&(t=(e[i].processedXData||e[i].data).length,(e[i].groupPixelWidth||t>this.chart.plotSizeX/n||t&&o.forced)&&(l=!0));return l?n:0},t.prototype.setDataGrouping=function(o,e){var i;if(e=W(e,!0),o||(o={forced:!1,units:null}),this instanceof t)for(i=this.series.length;i--;)this.series[i].update({dataGrouping:o},!1);else this.chart.options.series.forEach((function(t){t.dataGrouping=o}),!1);this.ordinal&&(this.ordinal.slope=void 0),e&&this.chart.redraw()},x(t,"postProcessData",t.prototype.applyGrouping),x(n,"update",(function(){if(this.dataGroup)return M(24,!1,this.series.chart),!1})),x(d,"headerFormatter",(function(t){var o,e,r,n,l,d=this.chart,time=d.time,h=t.labelConfig,c=h.series,m=c.options,x=c.tooltipOptions,D=m.dataGrouping,G=x.xDateFormat,y=c.xAxis,v=x[t.isFooter?"footerFormat":"headerFormat"];y&&"datetime"===y.options.type&&D&&P(h.key)&&(e=c.currentDataGrouping,r=D.dateTimeLabelFormats||T.dateTimeLabelFormats,e?(n=r[e.unitName],1===e.count?G=n[0]:(G=n[1],o=n[2])):!G&&r&&y.dateTime&&(G=y.dateTime.getXDateFormat(h.x,x.dateTimeLabelFormats)),l=time.dateFormat(G,h.key),o&&(l+=time.dateFormat(o,h.key+e.totalRange-1)),c.chart.styledMode&&(v=this.styledModeFormat(v)),t.text=f(v,{point:A(h.point,{key:l}),series:c},d),t.preventDefault())})),x(l,"destroy",m.destroyGroupedData),x(l,"afterSetOptions",(function(t){var o=t.options,e=this.type,r=this.chart.options.plotOptions,n=h.defaultOptions.plotOptions[e].dataGrouping,l=this.useCommonDataGrouping&&T;if(r&&(Y[e]||l)){n||(n=S(T,Y[e]));var d=this.chart.rangeSelector;o.dataGrouping=S(l,n,r.series&&r.series.dataGrouping,r[e].dataGrouping,this.userOptions.dataGrouping,!o.isInternal&&d&&P(d.selected)&&d.buttonOptions[d.selected].dataGrouping)}})),x(t,"afterSetScale",(function(){this.series.forEach((function(t){t.hasProcessed=!1}))})),r.dataGrouping=j,j})),e(o,"masters/modules/datagrouping.src.js",[o["Extensions/DataGrouping.js"]],(function(t){return t}))},t.exports?(l.default=l,t.exports=l):(r=[e(131)],void 0===(n=function(t){return l(t),l.Highcharts=t,l}.apply(o,r))||(t.exports=n))}}]);