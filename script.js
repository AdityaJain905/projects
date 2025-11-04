function showSection(id) {
  document.querySelectorAll('.section').forEach(
    sec => sec.classList.remove('show')
  );
  document.getElementById(id).classList.add('show');
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// Example subscribe handler:
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for subscribing!');
});

function showProjectDetails(projId) {
  showSection('details');
  // You can implement dynamic loading as you expand your site
}
