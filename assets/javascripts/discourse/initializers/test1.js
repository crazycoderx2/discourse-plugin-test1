export default {
  name: 'alert',
  initialize() {
    window.onmessage = function(e) {
      if (e.data === 'IFramePopup') {
        alert('It works IFramePopup! 1');
        $.featherlight("#test1FRAME", {persist: true});
      }
    };
  }
};
