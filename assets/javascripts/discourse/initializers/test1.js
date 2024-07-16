export default {
  name: 'alert',
  initialize() {
    window.onmessage = function(e) {
      if (e.data == 'IFramePopup') {
        alert('It works IFramePopup!');
      }
    }
  }
};
