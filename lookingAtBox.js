/* global AFRAME, BOX_SELECTED_COLOR */

AFRAME.registerComponent('looking-at-box', {

 dependencies: ['raycaster'],

 init: function () {
   this.el.addEventListener('raycaster-intersected', this.intersected.bind(this))
 },
  
 intersected: function () {
   this.el.setAttribute('material', 'color', BOX_SELECTED_COLOR)
 }
  
});

