// console.log("Hey");
// console.log("Chalti kya");

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Document</title>
//       <style>
//           .box{
//               font-size: 72px;
//               text-align: center;
//               background-color: red;
//               color: white;
//               display: none;
//           }
//           @media only screen and (max-width: 300px){
//               #box-1{
//                   display: block;
//                   background-color: aqua;
//               }
//           }
//           @media only screen and (min-width: 300px) and (max-width: 500px){
//               #box-2{
//                   display: block;
//                   background-color: blueviolet;
//               }
//           }
//           @media (min-width: 500px) and (max-width: 800px){
//               #box-3{
//                   display: block;
//                   color: black;
//                   background-color: yellow;
//               }
//           }
//           @media (min-width: 800px){
//               #box-4{
//                   display: block;
//                   background-color: green;
//               }
//           }
//       </style>
//   </head>
//   <body>
//       <div class="box" id="box-1">Mai ek iPhone hoon</div>
//       <div class="box" id="box-2">Mai ek Tablet hoon</div>
//       <div class="box" id="box-3">Mai ek computer hoon</div>
//       <div class="box" id="box-4">Mai ek widescreen computer hoon</div>
//   </body>
//   </html>`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const { features } = require("process");

document.addEventListener('DOMContentLoaded', function() {

  var typed = new Typed('#element', {
  strings: ['Web Developer'],
  typeSpeed: 50,
});
// var typed = new Typed('#element1', {
//   strings: ['Production Management Analyst At Morgan Stanley.'],
//   typeSpeed: 50,
// });

// buttons

  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var btn3 = document.getElementById('btn3');
  var btn4 = document.getElementById('project1');
  var btn5 = document.getElementById('project2');
  var btn6 = document.getElementById('project3');

  btn1.addEventListener('click', function() {
    var linkUrl = 'https://drive.google.com/file/d/1coFMyBxbCnrV6zqWPYNT4g5qpGY6wHC_/view';
    window.open(linkUrl, '_blank');
      
  });

  btn2.addEventListener('click', function(){
  var linkUrl = 'https://github.com/PruthvirajPalimkar';
  window.open(linkUrl, '_blank');
});
btn3.addEventListener('click', function(){
  // var linkUrl = 'https://www.linkedin.com/in/pruthvi-raj-palimkar/';
  var linkUrl = 'https://www.linkedin.com/in/pruthvi-raj-palimkar-a7a07a237/?original_referer=';
  window.open(linkUrl, '_blank');
  });
  btn4.addEventListener('click', function(){
    var linkUrl = 'https://pruthvirajpalimkar.github.io/ShoppingCart/';
    window.open(linkUrl, '_blank');
    });
  btn5.addEventListener('click', function(){
      var linkUrl = 'https://pruthvirajpalimkar.github.io/Todolist/';
      window.open(linkUrl, '_blank');
      });  
      btn6.addEventListener('click', function(){
        var linkUrl = 'https://prpmeal.netlify.app/';
        window.open(linkUrl, '_blank');
        });  

 


// slider animation 

function scrollTrigger(selector, options = {}){
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
      addObserver(el, options)
  })
}

function addObserver(el, options){
  if(!('IntersectionObserver' in window)){
      if(options.cb){
          options.cb(el)
      }else{
          entry.target.classList.add('active')
      }
      return
  }
  let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if(options.cb){
                  options.cb(el)
              }else{
                  entry.target.classList.add('active')
              }
              observer.unobserve(entry.target)
          }
      })
  }, options)
  observer.observe(el)
}
// Example usages:
scrollTrigger('.intro-text')

scrollTrigger('.scroll-reveal', {
  rootMargin: '-200px',
})

scrollTrigger('.loader', {
  rootMargin: '-200px',
  cb: function(el){
      el.innerText = 'Loading...'
      setTimeout(() => {
          el.innerText = 'Task Complete!'
      }, 1000)
  }
})

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0)
        // entry meta and media 
        const entries = document.querySelectorAll('.entry')

        entries.forEach(entry => {
          let entryMeta = entry.querySelector('.entry__meta');
          let entryMedia = entry.querySelector('.entry__media');

          gsap.set(entryMeta, {
            xPercent: -100,
            opacity: 0
          })

          gsap.set(entryMedia, {
            xPercent: 100,
            opacity: 0
          })

          gsap.to(entryMeta, {
            scrollTrigger: {
              trigger: entry,
              start: 'top bottom',
              end: 'bottom 90%',
              // markers: true,
              scrub: true
            },
            xPercent: 0,
            opacity: 1
          })

          gsap.to(entryMedia, {
            scrollTrigger: {
              trigger: entry,
              // start: 'top bottom',
              // end: 'bottom 90%',
              start: 'top 70%',
              end: 'bottom 110%',
              // markers: true,
              scrub: true
            },
            xPercent: 0,
            opacity: 1
          })
          // let tl = gsap.timeline({
          //   scrollTrigger: {
          //     trigger: entry,
          //     start: 'top bottom',
          //     end: 'bottom 90%',
          //     scrub: true,
          //     markers: true
          //   }
          // })
          // tl.fromTo(entryMeta, { xPercent: -100, opacity: 0}, { xPercent: 0, opactiy: 1})
          // tl.fromTo(entryMedia, { xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1},'<')
        // })
});

// const lenis = new Lenis()

// // lenis.on('scroll', (e) => {
// //   console.log(e)
// // })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0)
        // entry meta and media 
        // const entries = document.querySelectorAll('.entry')

        // entries.forEach(entry => {
        //   let entryMeta = entry.querySelector('.entry__meta');
        //   let entryMedia = entry.querySelector('.entry__media');

          // gsap.set(entryMeta, {
          //   xPercent: -100,
          //   opacity: 0
          // })

          // gsap.set(entryMedia, {
          //   xPercent: 100,
          //   opacity: 0
          // })

          // gsap.to(entryMeta, {
          //   scrollTrigger: {
          //     trigger: entry,
          //     start: 'top bottom',
          //     end: 'bottom 90%',
          //     markers: true
          //   },
          //   xPercent: 0,
          //   opacity: 1
          // })

          // gsap.to(entryMedia, {
          //   scrollTrigger: {
          //     trigger: entry,
          //     start: 'top 20%',
          //     end: 'bottom 80%',
          //     markers: true,
          //     scrub: true
          //   },
          //   xPercent: 0,
          //   opacity: 1
          // })
          // let tl = gsap.timeline({
          //   scrollTrigger: {
          //     trigger: entry,
          //     start: 'top bottom',
          //     end: 'bottom 90%',
          //     scrub: true,
          //     markers: true
          //   }
          // })
          // tl.fromTo(entryMeta, { xPercent: -100, opacity: 0}, { xPercent: 0, opactiy: 1})
          // tl.fromTo(entryMedia, { xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1},'<')


          

          // const entries1 = document.querySelectorAll('.services')

          // entries1.forEach(services => {
          //   let box = services.querySelector('box');
  
          //   gsap.set(box, {
          //     yPercent: -100,
          //     opacity: 0
          //   })
  
          //   gsap.to(box, {
          //     scrollTrigger: {
          //       trigger: entry,
          //       start: 'top',
          //       end: 'bottom 90%',
          //       // markers: true,
          //       scrub: true
          //     },
          //     yPercent: 0,
          //     opacity: 1
          //   })
  
            // gsap.to(entryMedia, {
            //   scrollTrigger: {
            //     trigger: entry,
            //     // start: 'top bottom',
            //     // end: 'bottom 90%',
            //     // start: 'top 70%',
            //     // end: 'bottom 110%',
            //     // markers: true,
            //     scrub: true
            //   },
            //   yPercent: 0,
            //   opacity: 1
            // })
            // let tl = gsap.timeline({
            //   scrollTrigger: {
            //     trigger: entry,
            //     start: 'top bottom',
            //     end: 'bottom 90%',
            //     scrub: true,
            //     markers: true
            //   }
            // })
            // tl.fromTo(entryMeta, { xPercent: -100, opacity: 0}, { xPercent: 0, opactiy: 1})
            // tl.fromTo(entryMedia, { xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1},'<')
          // })
  });
        // })
