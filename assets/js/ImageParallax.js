// Get the bounding rectangle of the container element
var rect = document.getElementById('midepagectaparallax').getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

// Function to apply parallax effect
function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

  
// Update the bounding rectangle on resize
window.addEventListener('resize', function() {
  rect = document.getElementById('midepagectaparallax').getBoundingClientRect();
});

// Update the bounding rectangle on scroll
window.addEventListener('scroll', function() {
  rect = document.getElementById('midepagectaparallax').getBoundingClientRect();
});

// Add mousemove event listener to the container element
document.getElementById('midepagectaparallax').addEventListener('mousemove', function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

  
// Ticker functionality with requestAnimationFrame
window.requestAnimationFrame(function animate() {
  if (mouse.moved) {
    // Apply parallax effect to all elements with the class 'js-mouse-move-100'
    document.querySelectorAll('.js-mouse-move-100').forEach(function(element) {
      parallaxIt(element, 10); // Adjust the movement value as needed
    });

    // Apply reverse parallax effect to all elements with the class 'js-mouse-move--reverse-100'
    document.querySelectorAll('.js-mouse-move--reverse-100').forEach(function(element) {
      parallaxIt(element, -10); // Adjust the movement value as needed
    });
  }
  mouse.moved = false;
  window.requestAnimationFrame(animate);
});