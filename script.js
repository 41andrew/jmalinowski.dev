let options = {
  threshold: 0.1
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.square');
    const heading = entry.target.querySelector('.heading_name');

    console.log('triggered');
    if (entry.isIntersecting) {
      square?.classList.add('square-animation');
      heading?.classList.add('heading-animation');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    //square?.classList.remove('square-animation');
    heading?.classList.remove('heading-animation');

  });
}, options);

observer.observe(document.querySelector('.square-wrapper'));
observer.observe(document.querySelector('.one'));