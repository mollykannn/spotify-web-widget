import{_ as p,e as c,f as m,g as l,w as h,o as u,c as y,a as i,n as v,h as o,v as g,i as f,j as r,k as d,d as _,t as x,l as b}from"./index.16b69857.js";const w={props:{page:String},setup(){const n=c();let t=m({size:"large",responsive:!1,width:300,maxWidth:0,height:380,url:"spotify:album:6uoOO45XoUdGYJ3nRddfBQ",inputURL:l({get:()=>t.size,set:e=>{t.size=e,t.height=e=="small"?80:380}}),inputSize:l({get:()=>t.size,set:e=>{t.size=e,t.height=e=="small"?80:380}}),inputResponsive:l({get:()=>t.responsive,set:e=>{t.responsive=e,t.width=e?0:300,t.maxWidth=e?350:0}}),iframeWidth:l(()=>t.width==0?"100%":t.width),iframeStyle:l(()=>t.maxWidth==0?{}:{"max-width":`${t.maxWidth}px`})});h(n.getSpotifyID,e=>{t.url=e});let a=m({code:l(()=>`<iframe src="https://open.spotify.com/embed?uri=${t.url}" width="${t.iframeWidth}" height="${t.height}" frameborder="0" allowtransparency="true" allow="encrypted-media" ${t.maxWidth==0?"":`style="max-width: ${t.maxWidth}px"`}/></iframe>`),CopyText:()=>{if(/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1){let e=document.createElement("textarea");e.style.position="fixed",e.value=a.code,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}else navigator.clipboard.writeText(a.code)}});return{copy:a,setting:t}}},S={class:"widget"},z=["src","width","height"],W={class:"setting-code-column"},C={class:"column setting"},U={class:"setting-column"},V=i("label",null,"Size:",-1),k=i("label",{for:"small"},"Small",-1),R=i("label",{for:"large"},"Large",-1),T={class:"setting-column"},M=i("label",null,"Responsive:",-1),B={class:"setting-column"},D=i("label",null,"Width:",-1),P={class:"setting-column"},I=i("label",null,"Max-Width:",-1),E={class:"setting-column"},L=i("label",null,"Height:",-1),N={class:"setting-column"},O=i("label",null,"Spotify ID:",-1),j={class:"column code"},G={class:"code-column"};function H(n,t,a,e,J,Q){return u(),y("div",{class:b(["column-widget",a.page])},[i("div",S,[i("iframe",{src:`https://open.spotify.com/embed?uri=${e.setting.url}`,width:e.setting.iframeWidth,height:e.setting.height,frameborder:"0",allowtransparency:"true",allow:"encrypted-media",style:v(e.setting.iframeStyle)},null,12,z)]),i("div",W,[i("div",C,[i("div",U,[V,o(i("input",{type:"radio",value:"small","onUpdate:modelValue":t[0]||(t[0]=s=>e.setting.inputSize=s),onClick:t[1]||(t[1]=(...s)=>n.set_size&&n.set_size(...s))},null,512),[[g,e.setting.inputSize]]),k,o(i("input",{type:"radio",value:"large","onUpdate:modelValue":t[2]||(t[2]=s=>e.setting.inputSize=s),onClick:t[3]||(t[3]=(...s)=>n.set_size&&n.set_size(...s))},null,512),[[g,e.setting.inputSize]]),R]),i("div",T,[M,o(i("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=s=>e.setting.inputResponsive=s)},null,512),[[f,e.setting.inputResponsive]])]),o(i("div",B,[D,o(i("input",{"onUpdate:modelValue":t[5]||(t[5]=s=>e.setting.width=s),type:"number"},null,512),[[d,e.setting.width]])],512),[[r,!e.setting.responsive]]),o(i("div",P,[I,o(i("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>e.setting.maxWidth=s),type:"number"},null,512),[[d,e.setting.maxWidth]])],512),[[r,e.setting.responsive]]),o(i("div",E,[L,o(i("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>e.setting.height=s),type:"number"},null,512),[[d,e.setting.height]])],512),[[r,e.setting.size=="large"]]),i("div",N,[O,o(i("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=s=>e.setting.url=s)},null,512),[[d,e.setting.url]])])]),i("div",j,[i("code",G,[_(x(e.copy.code)+" ",1),i("button",{class:"small primary copy tip","data-label":"Success",onClick:t[9]||(t[9]=s=>e.copy.CopyText())},"Copy")])])])],2)}var Y=p(w,[["render",H]]);export{Y as S};
