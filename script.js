const timeZones = [
  { city: 'New York', zone: 'America/New_York' },
  { city: 'London', zone: 'Europe/London' },
  { city: 'Paris', zone: 'Europe/Paris' },
  { city: 'Tokyo', zone: 'Asia/Tokyo' },
  { city: 'Sydney', zone: 'Australia/Sydney' },
  { city: 'Los Angeles', zone: 'America/Los_Angeles' },
  { city: 'Dubai', zone: 'Asia/Dubai' },
  { city: 'Johannesburg', zone: 'Africa/Johannesburg' }
];

const localClock = document.getElementById('localClock');
const localDate = document.getElementById('localDate');
const timezoneGrid = document.getElementById('timezoneGrid');

function formatDate(date, timeZone) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  } catch (error) {
    console.error(`Error formatting date for timezone ${timeZone}:`, error);
    return 'Invalid timezone';
  }
}

function formatTime(date, timeZone) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(date);
  } catch (error) {
    console.error(`Error formatting time for timezone ${timeZone}:`, error);
    return '--:--:--';
  }
}

function updateLocalTime() {
  const now = new Date();
  const localTime = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const localDateText = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  if (localClock) {
    localClock.textContent = localTime;
  }
  if (localDate) {
    localDate.textContent = localDateText;
  }
}

function buildTimezoneCards() {
  if (!timezoneGrid) {
    console.error('Timezone grid element not found');
    return;
  }

  timezoneGrid.innerHTML = timeZones
    .map(
      (tz) => `
        <article class="card">
          <h2 class="card__city">${tz.city}</h2>
          <p class="card__zone">${tz.zone}</p>
          <div class="card__time" data-city="${tz.city}" data-zone="${tz.zone}">--:--:--</div>
          <p class="card__date" data-date="${tz.city}">Loading date...</p>
        </article>
      `
    )
    .join('');
}

function updateTimezoneClocks() {
  const now = new Date();

  timeZones.forEach(({ city, zone }) => {
    const timeElement = document.querySelector(`[data-city="${city}"]`);
    const dateElement = document.querySelector(`[data-date="${city}"]`);

    if (timeElement) {
      timeElement.textContent = formatTime(now, zone);
    }

    if (dateElement) {
      dateElement.textContent = formatDate(now, zone);
    }
  });
}

function tick() {
  updateLocalTime();
  updateTimezoneClocks();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    buildTimezoneCards();
    tick();
    setInterval(tick, 1000);
  });
} else {
  buildTimezoneCards();
  tick();
  setInterval(tick, 1000);
}
