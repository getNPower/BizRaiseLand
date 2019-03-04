
const line_1 = document.getElementById('line_1');
const line_2 = document.getElementById('line_2');
const line_3 = document.getElementById('line_3');
const line_4 = document.getElementById('line_4');
const line_5 = document.getElementById('line_5');
const line_6 = document.getElementById('line_6');
const line_7 = document.getElementById('line_7');
const circle = document.getElementById('circle');
const curve_r = document.getElementById('curve_r');
const curve_l = document.getElementById('curve_l');


let path = new TimelineMax();
path.add(TweenMax.to(circle , 0.1, {fill: "#761813", ease: Power0.easeNone}));
path.add(TweenMax.fromTo(line_1, 0.15, {strokeDashoffset: 70}, {strokeDashoffset:0, ease: Power0.easeNone}));
path.add(TweenMax.fromTo(line_2, 0.15, {strokeDashoffset: 75}, {strokeDashoffset:0, ease: Power0.easeNone}));
path.add(TweenMax.fromTo(line_3, 0.15, {strokeDashoffset: 63}, {strokeDashoffset:0, ease: Power0.easeNone}));
path.add(TweenMax.fromTo(line_4, 0.3, {strokeDashoffset: 288}, {strokeDashoffset:0, ease: Power0.easeNone}));
path.add(TweenMax.fromTo(line_5, 0.15, {strokeDashoffset: 63}, {strokeDashoffset:0, ease: Power0.easeNone}));
path.add(TweenMax.fromTo(line_6, 0.15, {strokeDashoffset: 58}, {strokeDashoffset:0, ease: Power0.easeNone}));
path.add(TweenMax.fromTo(line_7, 0.15, {strokeDashoffset: 50}, {strokeDashoffset:0, ease: Power0.easeNone}));
path.add('label');
path.add(TweenMax.to(curve_r, 0.1, {css:{opacity: 1}, ease: Power0.easeNone}));
path.add(TweenMax.to(curve_l, 0.1, {css:{opacity: 1}, ease: Power0.easeNone}), 'label');
path.stop();


function animation_on(timeline){
    timeline.play();
}

function animation_out(timeline){
    timeline.reverse(-2);
}

circle.addEventListener("mouseenter", function (){animation_on(path);});
circle.addEventListener("mouseleave", function (){animation_out(path);});