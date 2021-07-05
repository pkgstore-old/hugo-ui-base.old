'use strict';

function worker() {
  onmessage = ($event) => {
    importScripts('/js/hljs/highlight.min.js');
    const $result = self.hljs.highlightAuto($event.data);
    postMessage($result.value);
    close();
  };
}

worker();
