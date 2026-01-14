// Theme Toggle: apply persisted theme from localStorage
const toggleBtn = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update button text based on theme
toggleBtn.textContent = currentTheme === 'light' ? 'Dark Mode' : 'Light Mode';
toggleBtn.addEventListener('click', () => {
  currentTheme = (document.documentElement.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  toggleBtn.textContent = currentTheme === 'light' ? 'Dark Mode' : 'Light Mode';
});

// Projects Data: Generate project cards dynamically
const projects = [
  {
    title: "Dynamic Rule Management for IDS/IPS (5G Network)",
    desc: "Architected and deployed a scalable 5G core network on Kubernetes (Open5GS & Helm). Integrated the Suricata IDS engine in a custom Docker UPF image for real-time packet inspection. Designed ML models (ANN, Random Forest) for intrusion detection, achieving 98% accuracy and 97% F1-score in detecting network anomalies."
  },
  {
    title: "Full-Stack Web Applications",
    desc: "Developed full-stack apps using Django (Python) and SQLite. Created a social media clone with user authentication, posting, and commenting. Built a web scraping & summarization tool (BeautifulSoup, Newspaper3k) to extract and condense article content with 90%+ relevance."
  },
  {
    title: "Chlorophyll Estimation (Machine Learning)",
    desc: "Implemented an end-to-end ML pipeline to estimate chlorophyll in tea leaves using image data (1,500+ samples). Extracted features and trained regression models (ANN, SVR, MLR) to predict chlorophyll content, achieving an R² score of 0.71 on test data."
  }
];

const projectsContainer = document.querySelector('.projects-container');
projects.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card';
  const title = document.createElement('h3');
  title.textContent = proj.title;
  const desc = document.createElement('p');
  desc.textContent = proj.desc;
  card.appendChild(title);
  card.appendChild(desc);
  projectsContainer.appendChild(card);
});

// Intersection Observer: Highlight nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const observerOptions = { threshold: 0.6 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, observerOptions);
sections.forEach(section => observer.observe(section));

// Animate skill bars on load
window.addEventListener('load', () => {
  document.querySelectorAll('.skill-level').forEach(bar => {
    // The width is already set inline; this triggers the CSS transition
    bar.style.width = bar.style.width;
  });
});
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  // Close on link click (mobile UX)
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });