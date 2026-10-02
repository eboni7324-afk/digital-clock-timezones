/**
 * World Clock Application
 * Copyright © 2026 Ebony Butler
 * All rights reserved.
 * Licensed under MIT License
 * 
 * Created by: Ebony Butler
 * Version: 1.0.0
 * Description: A digital world clock displaying current time in multiple time zones
 */

'use strict';

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

/**
 * Formats a date string for a given timezone
 * @param {Date} date - The date object to format
 * @param {string} timeZone - The IANA timezone string
 * @returns {string} Formatted date string
 */
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

/**
 * Formats a time string for a given timezone
 * @param {Date} date - The date object to format
 * @param {string} timeZone - The IANA timezone string
 * @returns {string} Formatted time string in HH:MM:SS format
 */
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

/**
 * Updates the local time and date display
 */
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

/**
 * Builds timezone card HTML elements
 */
function buildTimezoneCards() {
  if (!timezoneGrid) {
    console.error('Timezone grid element not found');
    return;
  }

  timezoneGrid.innerHTML = timeZones
    .map(
      (tz) => `
        <article class="card" role="region" aria-label="${tz.city} time">
          <h2 class="card__city">${tz.city}</h2>
          <p class="card__zone">${tz.zone}</p>
          <div class="card__time" data-city="${tz.city}" data-zone="${tz.zone}" aria-live="off">--:--:--</div>
          <p class="card__date" data-date="${tz.city}">Loading date...</p>
        </article>
      `
    )
    .join('');
}

/**
 * Updates all timezone clock displays
 */
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

/**
 * Main tick function - updates all clock displays
 */
function tick() {
  updateLocalTime();
  updateTimezoneClocks();
}

/**
 * Initializes the application
 */
function initializeApp() {
  buildTimezoneCards();
  tick();
  setInterval(tick, 1000);
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
