export default {
  name: 'alert',
  initialize() {
    document.getElementById("test1_host").attachShadow({ mode: "open" }).innerHTML = `
    <div id="slotAAA">
      <slot name="slotAAA"></slot>
    </div>
    <div id="slotBBB">
      <slot name="slotBBB"></slot>
    </div>`;
    
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
