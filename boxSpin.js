/* global AFRAME, BOX_SPEED */

AFRAME.registerComponent('box-spin', {
  tick: function (time, delta) {
    let rotation = this.el.getAttribute('rotation')
    rotation.y = (rotation.y + BOX_SPEED) % 360
    this.el.setAttribute('rotation', rotation)
  }
    <a-entity box-spin
                id="box" 
                geometry="primitive:box"
                position="0 3 -5"
                material="color:blue;
                          src: {Your-URL}">
      </a-entity>
});
