
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { display: block; }\n.",[1],"content { background-color: #FFFFFF; }\n.",[1],"v_row_block { display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; }\n.",[1],"v_row { color:black; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack:justify; -webkit-justify-content:space-between; -ms-flex-pack:justify; justify-content:space-between; padding: ",[0,20],"; }\n.",[1],"v_col { width: ",[0,120],"; text-align:center; }\n.",[1],"HeadContente wx-view { text-align: center; color: #1C78C0; }\n.",[1],"HeadContente wx-view wx-text{ color: #E1E1E1; }\n.",[1],"HeadContente { padding: ",[0,65],"; padding-top: ",[0,25],"; }\n",],undefined,{path:"./pages/search/search.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/search/search.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      