const dataFacts = [
  "80% of data science work is data cleaning and preparation, not modeling.",
  "Netflix saves $1 billion annually through its recommendation algorithm.",
  "Data doubles every 2 years globally - that's exponential growth.",
  "Google processes 20 petabytes of data daily.",
  "90% of the world's data was created in the last 2 years.",
  "Financial institutions prevent $2 billion in fraud annually using AI.",
  "A single autonomous car generates 4 terabytes of data per day.",
  "Python's Pandas library was created by Wes McKinney in 2008.",
  "The average data analyst writes 100-200 lines of SQL daily.",
  "Power BI has over 5 million monthly active users worldwide.",
  "ETL processes can consume up to 80% of a data pipeline's resources.",
  "Real-time analytics can improve business decisions by 5x.",
  "Data validation catches 60% of errors before they impact production.",
  "BFSI sector invests 15-20% of IT budgets in data analytics.",
  "Automated controls reduce manual testing time by 70%."
];

let demoChart = null;

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeTyped();
  initializeRandomFacts();
  initializeDemo();
  setCurrentYear();
});

function initializeNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

function initializeTyped() {
  if (typeof Typed !== 'undefined') {
    new Typed('#typed-roles', {
      strings: [
        'Data Analyst (BFSI)',
        'Python Automation',
        'IT Automated Controls',
        'Power BI Developer',
        'Risk & Controls Analytics',
        'Process Automation'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
}

function initializeRandomFacts() {
  const factElement = document.getElementById('randomFact');
  const newFactBtn = document.getElementById('newFactBtn');

  function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * dataFacts.length);
    factElement.style.opacity = '0';
    factElement.style.transition = 'opacity 0.2s ease';
    setTimeout(() => {
      factElement.textContent = dataFacts[randomIndex];
      factElement.style.opacity = '1';
    }, 200);
  }

  showRandomFact();

  if (newFactBtn) {
    newFactBtn.addEventListener('click', showRandomFact);
  }
}

function initializeDemo() {
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resetBtn = document.getElementById('resetBtn');

  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', analyzeData);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetDemo);
  }
}

function analyzeData() {
  const input = document.getElementById('demoInput').value.trim();
  const loader = document.getElementById('loader');
  const loaderText = document.getElementById('loaderText');
  const resultsContainer = document.getElementById('resultsContainer');
  const chartContainer = document.getElementById('chartContainer');
  const metricsContainer = document.getElementById('metricsContainer');

  if (!input) {
    alert('Please enter some data first!');
    return;
  }

  const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

  if (numbers.length === 0) {
    alert('Please enter valid numbers separated by commas!');
    return;
  }

  loader.classList.add('active');
  resultsContainer.innerHTML = '';
  chartContainer.innerHTML = '';
  chartContainer.classList.remove('active');
  metricsContainer.innerHTML = '';

  const messages = [
    'Processing data...',
    'Detecting patterns...',
    'Calculating metrics...',
    'Generating insights...',
    'Building dashboard...'
  ];

  let messageIndex = 0;
  const messageInterval = setInterval(() => {
    loaderText.textContent = messages[messageIndex];
    messageIndex++;
    if (messageIndex >= messages.length) {
      clearInterval(messageInterval);
    }
  }, 400);

  setTimeout(() => {
    loader.classList.remove('active');
    const stats = calculateStatistics(numbers);
    displayChart(numbers, chartContainer);
    displayMetrics(stats, metricsContainer);
    chartContainer.classList.add('active');
  }, 2000);
}

function calculateStatistics(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const mean = sum / numbers.length;
  const sorted = [...numbers].sort((a, b) => a - b);
  const median = sorted.length % 2 === 0
    ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
    : sorted[Math.floor(sorted.length / 2)];
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const range = max - min;
  
  const variance = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / numbers.length;
  const stdDev = Math.sqrt(variance);
  const anomalies = numbers.filter(num => Math.abs(num - mean) > 2 * stdDev).length;
  
  return {
    count: numbers.length,
    sum: sum.toFixed(2),
    mean: mean.toFixed(2),
    median: median.toFixed(2),
    min: min.toFixed(2),
    max: max.toFixed(2),
    range: range.toFixed(2),
    stdDev: stdDev.toFixed(2),
    anomalies: anomalies
  };
}

function displayChart(numbers, container) {
  const canvas = document.createElement('canvas');
  canvas.id = 'demoChart';
  container.innerHTML = '';
  container.appendChild(canvas);

  if (demoChart) {
    demoChart.destroy();
  }

  const ctx = canvas.getContext('2d');
  demoChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: numbers.map((_, i) => `Point ${i + 1}`),
      datasets: [{
        label: 'Data Values',
        data: numbers,
        borderColor: '#00d9ff',
        backgroundColor: 'rgba(0, 217, 255, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#00d9ff',
        pointBorderColor: '#0f1419',
        pointBorderWidth: 2,
        pointHoverBackgroundColor: '#ffb84d',
        pointHoverBorderColor: '#00d9ff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            color: '#f0f3f7',
            font: { family: 'Inter', size: 14, weight: '500' }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 20, 25, 0.95)',
          titleColor: '#00d9ff',
          bodyColor: '#f0f3f7',
          borderColor: '#00d9ff',
          borderWidth: 2,
          padding: 14,
          displayColors: false,
          titleFont: { size: 14, weight: '600' },
          bodyFont: { size: 13 }
        }
      },
      scales: {
        y: {
          ticks: { 
            color: '#b4bcc7', 
            font: { family: 'Inter', size: 12 }
          },
          grid: { color: 'rgba(255, 255, 255, 0.08)' }
        },
        x: {
          ticks: { 
            color: '#b4bcc7', 
            font: { family: 'Inter', size: 12 }
          },
          grid: { color: 'rgba(255, 255, 255, 0.08)' }
        }
      }
    }
  });
}

function displayMetrics(stats, container) {
  const metrics = [
    { label: 'Count', value: stats.count, icon: 'fa-hashtag' },
    { label: 'Mean', value: stats.mean, icon: 'fa-chart-simple' },
    { label: 'Median', value: stats.median, icon: 'fa-signal' },
    { label: 'Std Dev', value: stats.stdDev, icon: 'fa-arrows-left-right' },
    { label: 'Min', value: stats.min, icon: 'fa-arrow-down' },
    { label: 'Max', value: stats.max, icon: 'fa-arrow-up' },
    { label: 'Range', value: stats.range, icon: 'fa-expand' },
    { label: 'Anomalies', value: stats.anomalies, icon: 'fa-triangle-exclamation' }
  ];

  container.innerHTML = metrics.map(metric => `
    <div class="metric-card">
      <div class="metric-label">
        <i class="fas ${metric.icon}"></i> ${metric.label}
      </div>
      <div class="metric-value">${metric.value}</div>
    </div>
  `).join('');
}

function resetDemo() {
  document.getElementById('demoInput').value = '';
  document.getElementById('resultsContainer').innerHTML = `
    <div class="empty-state">
      <i class="fas fa-chart-column"></i>
      <p>Run analysis to see results</p>
    </div>
  `;
  document.getElementById('chartContainer').innerHTML = '';
  document.getElementById('chartContainer').classList.remove('active');
  document.getElementById('metricsContainer').innerHTML = '';
  
  if (demoChart) {
    demoChart.destroy();
    demoChart = null;
  }
}

function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
