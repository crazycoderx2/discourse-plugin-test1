export default {
  name: 'alert',
  initialize() {
    document.getElementById("test1_host").attachShadow({ mode: "open" }).innerHTML = `
    <p>========= A =========</p>
    <div id="slotAAA">
      <slot name="slotAAA"></slot>
    </div>
    <p>========= B =========</p>
    <div id="slotBBB">
      <slot name="slotBBB"></slot>
    </div>
    <p>========= Z =========</p>`;
    
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
