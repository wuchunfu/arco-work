import{d as h,a as s,r as d,o as c,g as _,h as l,j as e,m as o,k as x,O as u}from"./vendor.98fdfd48.js";import{_ as w}from"./index.353524b8.js";const C={class:"main-container"},E={class:"editor-container"},T={class:"mt-5"},y=u("\u589E\u52A0\u6587\u672C"),B=u("\u589E\u52A0\u56FE\u7247"),M=u("\u9884\u89C8HTML"),H=["innerHTML"],V=h({setup(b){const t=s(),r=s(""),n=s("");function p(){t.value.addText(`
### \u65B0\u589E\u5185\u5BB9`)}function m(){t.value.addImage(`
![](http://qingqingxuan.gitee.io/img/logo.png)`)}function v(){n.value=t.value.getHtmlValue()}return(I,i)=>{const f=d("MarkdownEditor"),a=d("a-button"),g=d("a-space");return c(),_("div",C,[l("div",E,[e(f,{ref_key:"markdownEditor",ref:t,value:r.value,"onUpdate:value":i[0]||(i[0]=k=>r.value=k),height:400,placeholder:"Insert here\u2026"},null,8,["value"])]),l("div",T,[e(g,null,{default:o(()=>[e(a,{status:"success",onClick:p},{default:o(()=>[y]),_:1}),e(a,{status:"warning",onClick:m},{default:o(()=>[B]),_:1}),e(a,{type:"primary",onClick:v},{default:o(()=>[M]),_:1})]),_:1})]),n.value?(c(),_("div",{key:0,class:"p-4 mt-4 priview-content",innerHTML:n.value},null,8,H)):x("v-if",!0)])}}});var j=w(V,[["__scopeId","data-v-7ff5f0b2"]]);export{j as default};