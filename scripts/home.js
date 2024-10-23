let homeSection, 
    sobreSection, 
    skillsSection, 
    portfolioSection, 
    contatoSection

let homeLink, 
    sobreLink, 
    skillsLink, 
    portfolioLink, 
    contatoLink

let innerContainer

window.onload = function () {
  innerContainer = document.getElementById('inner-container')
  
  homeLink = document.getElementById('link-home')
  skillsLink = document.getElementById('link-skills')
  portfolioLink = document.getElementById('link-portfolio')
  contatoLink = document.getElementById('link-contato')
  sobreLink = document.getElementById('link-sobre')
  
  homeSection = document.getElementById('home')
  sobreSection = document.getElementById('sobre')
  skillsSection = document.getElementById('skills')
  portfolioSection = document.getElementById('portfolio')
  contatoSection = document.getElementById('contato')

  handleMainScroll()
}

handleMainScroll = function () {
  checkVisible(homeSection) ? homeLink.classList.add('selected') : homeLink.classList.remove('selected');
  checkVisible(sobreSection) ? sobreLink.classList.add('selected') : sobreLink.classList.remove('selected');
  checkVisible(skillsSection) ? skillsLink.classList.add('selected') : skillsLink.classList.remove('selected')
  checkVisible(portfolioSection) ? portfolioLink.classList.add('selected') : portfolioLink.classList.remove('selected')
  checkVisible(contatoSection) ? contatoLink.classList.add('selected') : contatoLink.classList.remove('selected')
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 50 || rect.top - viewHeight >= -50);
}