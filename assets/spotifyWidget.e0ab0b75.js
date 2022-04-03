import{_ as m,e as h,f as p,g as d,w as u,o as c,c as _,a as e,n as f,h as o,v as g,i as v,j as r,k as a,t as y,l as w}from"./index.ce335c4f.js";const b={props:{page:String},setup(){const l=h();let t=p({size:"large",responsive:!1,width:300,maxWidth:0,height:380,url:"spotify:album:6uoOO45XoUdGYJ3nRddfBQ",inputURL:d({get:()=>t.size,set:n=>{t.size=n,t.height=n=="small"?80:380}}),inputSize:d({get:()=>t.size,set:n=>{t.size=n,t.height=n=="small"?80:380}}),inputResponsive:d({get:()=>t.responsive,set:n=>{t.responsive=n,t.width=n?0:300,t.maxWidth=n?350:0}}),iframeWidth:d(()=>t.width==0?"100%":t.width),iframeStyle:d(()=>t.maxWidth==0?{}:{"max-width":`${t.maxWidth}px`})});return u(l.getSpotifyID,n=>{t.url=n}),{setting:t}}},z={class:"widget"},S=["src","width","height"],x={class:"setting-code-column"},W={class:"column setting"},U={class:"setting-column"},V=e("label",null,"Size:",-1),k=e("label",{for:"small"},"Small",-1),R=e("label",{for:"large"},"Large",-1),B={class:"setting-column"},C=e("label",null,"Responsive:",-1),D={class:"setting-column"},M=e("label",null,"Width:",-1),I={class:"setting-column"},L=e("label",null,"Max-Width:",-1),O={class:"setting-column"},j=e("label",null,"Height:",-1),E={class:"setting-column"},G=e("label",null,"Spotify ID:",-1),H={class:"column code"},J={class:"code-column"};function N(l,t,n,i,Q,T){return c(),_("div",{class:w(["column-widget",n.page])},[e("div",z,[e("iframe",{src:`https://open.spotify.com/embed?uri=${i.setting.url}`,width:i.setting.iframeWidth,height:i.setting.height,frameborder:"0",allowtransparency:"true",allow:"encrypted-media",style:f(i.setting.iframeStyle)},null,12,S)]),e("div",x,[e("div",W,[e("div",U,[V,o(e("input",{type:"radio",value:"small","onUpdate:modelValue":t[0]||(t[0]=s=>i.setting.inputSize=s),onClick:t[1]||(t[1]=(...s)=>l.set_size&&l.set_size(...s))},null,512),[[g,i.setting.inputSize]]),k,o(e("input",{type:"radio",value:"large","onUpdate:modelValue":t[2]||(t[2]=s=>i.setting.inputSize=s),onClick:t[3]||(t[3]=(...s)=>l.set_size&&l.set_size(...s))},null,512),[[g,i.setting.inputSize]]),R]),e("div",B,[C,o(e("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=s=>i.setting.inputResponsive=s)},null,512),[[v,i.setting.inputResponsive]])]),o(e("div",D,[M,o(e("input",{"onUpdate:modelValue":t[5]||(t[5]=s=>i.setting.width=s),type:"number"},null,512),[[a,i.setting.width]])],512),[[r,!i.setting.responsive]]),o(e("div",I,[L,o(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>i.setting.maxWidth=s),type:"number"},null,512),[[a,i.setting.maxWidth]])],512),[[r,i.setting.responsive]]),o(e("div",O,[j,o(e("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>i.setting.height=s),type:"number"},null,512),[[a,i.setting.height]])],512),[[r,i.setting.size=="large"]]),e("div",E,[G,o(e("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=s=>i.setting.url=s)},null,512),[[a,i.setting.url]])])]),e("div",H,[e("code",J,y(`<iframe src="https://open.spotify.com/embed?uri=${i.setting.url}" width="${i.setting.iframeWidth}" height="${i.setting.height}" frameborder="0" allowtransparency="true" allow="encrypted-media" ${i.setting.maxWidth==0?"":`style="max-width: ${i.setting.maxWidth}px"`}/></iframe>`),1)])])],2)}var Y=m(b,[["render",N]]);export{Y as S};
