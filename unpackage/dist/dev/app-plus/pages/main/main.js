
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { position:absolute; }\n.",[1],"cover_v { height:",[0,60],"; width:",[0,60],"; background-color:#189FFF; border-radius:50%; display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; -webkit-box-pack:center; -webkit-justify-content:center; -ms-flex-pack:center; justify-content:center; -webkit-box-align:center; -webkit-align-items:center; -ms-flex-align:center; align-items:center; position: absolute; top:80%; z-index:999; left:90%; }\n.",[1],"uni-swiper-tab { background-color: #fff; }\n.",[1],"tab-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; width: 33%; }\n.",[1],"active { color: #007AFF; }\n.",[1],"swiper-box { margin-top: ",[0,10],"; height: 100%; }\n.",[1],"list { height: 100%; }\nwx-cover-image { }\n.",[1],"img { height:",[0,40],"; width:",[0,40],"; }\n",],undefined,{path:"./pages/main/main.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/main/main.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      