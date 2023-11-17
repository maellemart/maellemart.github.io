let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #8033A9;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #8033A9;"> En busca de mejora y de aprender todos los días .</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
