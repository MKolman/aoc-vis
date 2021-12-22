(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{330:function(t,e,r){"use strict";var o,n,b;b=function(b){function t(b,t,e,p){b.hasOwnProperty(t)||(b[t]=p.apply(null,e))}t(b=b?b._modules:{},"Extensions/PatternFill.js",[b["Core/Animation/AnimationUtilities.js"],b["Core/Chart/Chart.js"],b["Core/Globals.js"],b["Core/DefaultOptions.js"],b["Core/Series/Point.js"],b["Core/Series/Series.js"],b["Core/Renderer/SVG/SVGRenderer.js"],b["Core/Utilities.js"]],(function(b,t,e,p,r,u,o,n){function h(a,t){var b=(a=JSON.stringify(a)).length||0,e=0,r=0;if(t){t=Math.max(Math.floor(b/500),1);for(var o=0;o<b;o+=t)e+=a.charCodeAt(o);e&=e}for(;r<b;++r)e=(e<<5)-e+(t=a.charCodeAt(r)),e&=e;return e.toString(16).replace("-","1")}var c=b.animObject,d=p.getOptions;b=n.addEvent;var l=n.erase,f=n.merge,q=n.pick,m=n.removeEvent;p=n.wrap;var a,y,x=e.patterns=(a=[],y=d().colors,["M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5","M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5","M 2 0 L 2 5 M 4 0 L 4 5","M 0 2 L 5 2 M 0 4 L 5 4","M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5"].forEach((function(b,t){a.push({path:b,color:y[t],width:5,height:5,patternTransform:"scale(1.4 1.4)"})})),["M 0 0 L 5 10 L 10 0","M 3 3 L 8 3 L 8 8 L 3 8 Z","M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0","M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11","M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"].forEach((function(b,t){a.push({path:b,color:y[t+5],width:10,height:10})})),a);r.prototype.calculatePatternDimensions=function(a){if(!a.width||!a.height){var t=this.graphic&&(this.graphic.getBBox&&this.graphic.getBBox(!0)||this.graphic.element&&this.graphic.element.getBBox())||{},b=this.shapeArgs;if(b&&(t.width=b.width||t.width,t.height=b.height||t.height,t.x=b.x||t.x,t.y=b.y||t.y),a.image){if(!t.width||!t.height)return a._width="defer",void(a._height="defer");a.aspectRatio&&(t.aspectRatio=t.width/t.height,a.aspectRatio>t.aspectRatio?t.aspectWidth=t.height*a.aspectRatio:t.aspectHeight=t.width/a.aspectRatio),a._width=a.width||Math.ceil(t.aspectWidth||t.width),a._height=a.height||Math.ceil(t.aspectHeight||t.height)}a.width||(a._x=a.x||0,a._x+=t.x-Math.round(t.aspectWidth?Math.abs(t.aspectWidth-t.width)/2:0)),a.height||(a._y=a.y||0,a._y+=t.y-Math.round(t.aspectHeight?Math.abs(t.aspectHeight-t.height)/2:0))}},o.prototype.addPattern=function(a,t){t=q(t,!0);var b=c(t),e=a.width||a._width||32,r=a.height||a._height||32,o=a.color||"#343434",g=a.id,h=this,d=function(a){h.rect(0,0,e,r).attr({fill:a}).add(f)};if(g||(this.idCounter=this.idCounter||0,g="highcharts-pattern-"+this.idCounter+"-"+(this.chartIndex||0),++this.idCounter),this.forExport&&(g+="-export"),this.defIds=this.defIds||[],!(-1<this.defIds.indexOf(g))){this.defIds.push(g);var l={id:g,patternUnits:"userSpaceOnUse",patternContentUnits:a.patternContentUnits||"userSpaceOnUse",width:e,height:r,x:a._x||a.x||0,y:a._y||a.y||0};a.patternTransform&&(l.patternTransform=a.patternTransform);var f=this.createElement("pattern").attr(l).add(this.defs);return f.id=g,a.path?(l=n.isObject(a.path)?a.path:{d:a.path},a.backgroundColor&&d(a.backgroundColor),d={d:l.d},this.styledMode||(d.stroke=l.stroke||o,d["stroke-width"]=q(l.strokeWidth,2),d.fill=l.fill||"none"),l.transform&&(d.transform=l.transform),this.createElement("path").attr(d).add(f),f.color=o):a.image&&(t?this.image(a.image,0,0,e,r,(function(){this.animate({opacity:q(a.opacity,1)},b),m(this.element,"load")})).attr({opacity:0}).add(f):this.image(a.image,0,0,e,r).add(f)),a.image&&t||void 0===a.opacity||[].forEach.call(f.element.childNodes,(function(t){t.setAttribute("opacity",a.opacity)})),this.patternElements=this.patternElements||{},this.patternElements[g]=f}},p(u.prototype,"getColor",(function(a){var t=this.options.color;t&&t.pattern&&!t.pattern.color?(delete this.options.color,a.apply(this,Array.prototype.slice.call(arguments,1)),t.pattern.color=this.color,this.color=this.options.color=t):a.apply(this,Array.prototype.slice.call(arguments,1))})),b(u,"render",(function(){var a=this.chart.isResizing;(this.isDirtyData||a||!this.chart.hasRendered)&&(this.points||[]).forEach((function(t){var b=t.options&&t.options.color;b&&b.pattern&&(!a||t.shapeArgs&&t.shapeArgs.width&&t.shapeArgs.height?t.calculatePatternDimensions(b.pattern):(b.pattern._width="defer",b.pattern._height="defer"))}))})),b(r,"afterInit",(function(){var a=this.options.color;a&&a.pattern&&("string"==typeof a.pattern.path&&(a.pattern.path={d:a.pattern.path}),this.color=this.options.color=f(this.series.options.color,a))})),b(o,"complexColor",(function(a){var t=a.args[0],b=a.args[1];a=a.args[2];var e=this.chartIndex||0,o=t.pattern,n="#343434";if(void 0!==t.patternIndex&&x&&(o=x[t.patternIndex]),!o)return!0;if(o.image||"string"==typeof o.path||o.path&&o.path.d){var g=a.parentNode&&a.parentNode.getAttribute("class");g=g&&-1<g.indexOf("highcharts-legend"),"defer"!==o._width&&"defer"!==o._height||r.prototype.calculatePatternDimensions.call({graphic:{element:a}},o),!g&&o.id||((o=f({},o)).id="highcharts-pattern-"+e+"-"+h(o)+h(o,!0)),this.addPattern(o,!this.forExport&&q(o.animation,this.globalAnimation,{duration:100})),n="url("+this.url+"#"+o.id+(this.forExport?"-export":"")+")"}else n=o.color||n;return a.setAttribute(b,n),t.toString=function(){return n},!1})),b(t,"endResize",(function(){(this.renderer&&this.renderer.defIds||[]).filter((function(a){return a&&a.indexOf&&0===a.indexOf("highcharts-pattern-")})).length&&(this.series.forEach((function(a){a.points.forEach((function(a){(a=a.options&&a.options.color)&&a.pattern&&(a.pattern._width="defer",a.pattern._height="defer")}))})),this.redraw(!1))})),b(t,"redraw",(function(){var a={},t=this.renderer,b=(t.defIds||[]).filter((function(a){return a.indexOf&&0===a.indexOf("highcharts-pattern-")}));b.length&&([].forEach.call(this.renderTo.querySelectorAll('[color^="url("], [fill^="url("], [stroke^="url("]'),(function(b){(b=b.getAttribute("fill")||b.getAttribute("color")||b.getAttribute("stroke"))&&(b=b.replace(t.url,"").replace("url(#","").replace(")",""),a[b]=!0)})),b.forEach((function(b){a[b]||(l(t.defIds,b),t.patternElements[b]&&(t.patternElements[b].destroy(),delete t.patternElements[b]))})))}))})),t(b,"masters/modules/pattern-fill.src.js",[],(function(){}))},t.exports?(b.default=b,t.exports=b):(o=[r(131)],void 0===(n=function(t){return b(t),b.Highcharts=t,b}.apply(e,o))||(t.exports=n))}}]);