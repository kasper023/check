let left = 0
let slider = document.getElementById('slider')
let interval
function slider_move(val) {
    if(val === undefined) {
        val = -200
    }
    left += val
    if(left < -400) left = 0
    if(left > 0) left = -400
    slider.style.left = left + 'px'
    clearInterval(interval)
    interval = setInterval(slider_move, 5000);
}
interval = setInterval(slider_move, 5000);