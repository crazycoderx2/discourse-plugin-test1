export default {
  name: 'alert',
  initialize() {
    window.onmessage = function(e) {
      if (e.data === 'IFramePopup') {
        alert('It works IFramePopup! 2');
        //$.featherlight("#test1FRAME", {persist: true});
        let frame = document.getElementById("test1FRAME");
        frame.slot = frame.slot == "slotAAA" ? "slotBBB" : "slotAAA";
      }
    };
  }
};
