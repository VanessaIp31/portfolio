renderName()

function renderName() {
  renderByEachLetter("about-name", "Vanessa Ip", renderDeveloper)
}

function renderDeveloper() {
  renderByEachLetter("about-name", "a Web Developer", renderName)
}

function renderByEachLetter(id, text, callback = undefined, index = 0, interval = 300) {
  const element = document.getElementById(id)
  if (!element) return
  if (index > text.length) {
    if (callback) callback()
    return;
  }
  element.innerText = text.slice(0, index)
  setTimeout(() => renderByEachLetter(id, text, callback, index + 1, interval), interval)
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement =
      document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetElement.offsetTop - 90,
      behavior: 'smooth'
    });
  });
});