let left = 0
let slider = document.getElementById('slider')
function slider_move(val) {
    console.log('move');
    left += val
    if(left < -400) left = -400
    if(left > 0) left = 0
    slider.style.left = left + 'px'
}