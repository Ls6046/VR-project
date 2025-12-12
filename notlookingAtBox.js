/* global AFRAME, BOX_NOT_SELECTED_COLOR */

AFRAME.registerComponent('not-looking-at-box', {

 dependencies: ['raycaster'],

 init: function () {
   this.el.addEventListener('raycaster-intersected-cleared', this.intersectedCleared.bind(this))
 },
  
 intersectedCleared: function () {
   this.el.setAttribute('material', 'color', BOX_NOT_SELECTED_COLOR)
 }
  
});
