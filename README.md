# World Clock

**Created by: Ebony Butler**

A modern, responsive digital clock application that displays the current time in multiple time zones around the world.

## Features

- ✨ **Live Local Time Display** - Shows your current local time with automatic second-by-second updates
- 🌍 **Global Time Zones** - Displays time in 8 major cities across the world:
  - New York (America/New_York)
  - London (Europe/London)
  - Paris (Europe/Paris)
  - Tokyo (Asia/Tokyo)
  - Sydney (Australia/Sydney)
  - Los Angeles (America/Los_Angeles)
  - Dubai (Asia/Dubai)
  - Johannesburg (Africa/Johannesburg)
- 🎨 **Modern UI Design** - Glassmorphism design with smooth animations and gradient backgrounds
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Real-time Updates** - Clock updates every second with zero lag
- ♿ **Accessible** - Semantic HTML with ARIA labels for screen readers
- 🛡️ **Error Handling** - Robust error handling for timezone formatting

## Running Locally

### Method 1: Direct Browser
Simply open `index.html` in any modern web browser.

### Method 2: Local Server (Python)
```bash
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

### Method 3: Using Node.js
```bash
npx http-server
```

## Project Structure

```
digital-clock-timezones/
├── index.html          # HTML structure with semantic markup
├── style.css           # Modern CSS with animations and responsive design
├── script.js           # Vanilla JavaScript with timezone logic
├── LICENSE             # MIT License
└── README.md           # Documentation
```

## Technical Details

### Technologies Used
- **HTML5** - Semantic markup with proper meta tags
- **CSS3** - Flexbox, Grid, Gradients, Animations, Backdrop Filters
- **Vanilla JavaScript** - Intl API for accurate timezone formatting
- **No Dependencies** - Pure client-side, zero external dependencies

### Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Code Quality

- Strict mode enabled
- JSDoc comments for all functions
- Error handling for invalid timezones
- Accessibility features included
- Optimized performance with efficient updates

## License

**MIT License**

```
Copyright © 2026 Ebony Butler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Copyright & Ownership

© 2026 **Ebony Butler**. All rights reserved.

This project is licensed under the MIT License. You are free to use, modify, and distribute this software, provided that proper attribution is given to Ebony Butler.

## Author

**Ebony Butler**
- GitHub: [@eboni7324-afk](https://github.com/eboni7324-afk)
- Project: [World Clock on GitHub](https://github.com/eboni7324-afk/digital-clock-timezones)

---

**Version:** 1.0.0  
**Last Updated:** October 2, 2026  
**Status:** Active & Maintained
