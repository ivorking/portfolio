## **Portfolio site**

### Summary

This is a GitHub site for my web project portfolio, showcasing recent projects using JasaScript, HTML5, CSS3, Ruby and Rails. 

This site shows links to the live deployments of
1. Board Game Sherpa
2. textFIRE
3. Gun Law Reform
4. Tic Tac Toe
5. Chuck Norris Meme Maker

**_Note: React.JS project is coming soon..._**

### Technologies

Used for this site:
* JavaScript
* HTML5
* CSS3, SCSS
* Gulp
* Jekyll
* Particle.js
* Sweet-scroll.js
* font-awesome

### Coding challenges

There were issues incorporating Particle.js into a Jekyll site, and then ensuring consistent rendering across differing mobile versions of Chrome. The Particle.js landing canvas was not rendering full-screen on the current version of Chrome on mobile, but was doing so on the Chrome beta versions. Oddly, this could only be resolved with setting "min-height: 99vh;" on the Particle.js element (#particles-js) - which rendered as 100% of the viewport. It's not clear why the current and beta versions of Chrome were rendering Particle.js canvas at different sizes. As the beta version of Chrome becomes the stable release, I expect this won't be an issue any longer.

### Licence

MIT Licence

