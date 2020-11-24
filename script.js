document.addEventListener('mousemove', parallax);


function parallax(e) {
    this.querySelectorAll('.layer2').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 500
        let y = (window.innerHeight - e.pageY * speed) / 500
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}
