particlesJS("particles-js", {
  particles: {
    number: {
      value:30,
    },
    shape: {
      type: "image",
      polygon: { nb_sides: 6 },
      image: {
        src: "https://pngicon.ru/file/uploads/sova.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      random: true,
      anim: {  
             speed: 10,
           }
    },
    size: {
      value: 48.10236182596568,  
    },
    
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    modes: {
      repulse: { distance: 200, duration:       0.4 },
     
    }
  },
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);