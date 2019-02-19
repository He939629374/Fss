
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"head { height: 10%; }\n.",[1],"Main { height: 90%; }\n",],undefined,{path:"./pages/wfengine/wftaskmain.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/wfengine/wftaskmain.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      