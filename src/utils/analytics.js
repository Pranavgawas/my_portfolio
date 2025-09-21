// Simple, privacy-friendly analytics without cookies
class SimpleAnalytics {
  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.events = [];
  }

  generateSessionId() {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  // Track page views
  trackPageView(page = window.location.pathname) {
    this.logEvent('page_view', { page, timestamp: Date.now() });
  }

  // Track custom events
  trackEvent(eventName, properties = {}) {
    this.logEvent(eventName, { ...properties, timestamp: Date.now() });
  }

  // Track clicks on external links
  trackExternalClick(url, label) {
    this.logEvent('external_click', { url, label, timestamp: Date.now() });
  }

  // Track scroll depth
  trackScrollDepth(depth) {
    this.logEvent('scroll_depth', { depth, timestamp: Date.now() });
  }

  // Track time on page
  trackTimeOnPage() {
    const timeSpent = Math.round((Date.now() - this.startTime) / 1000);
    this.logEvent('time_on_page', { seconds: timeSpent, timestamp: Date.now() });
  }

  // Internal logging method
  logEvent(eventName, properties) {
    const event = {
      event: eventName,
      session_id: this.sessionId,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      referrer: document.referrer,
      language: navigator.language,
      ...properties
    };

    this.events.push(event);

    // In development, just log to console
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }

    // In production, you could send to your analytics service
    // this.sendToAnalyticsService(event);
  }

  // Method to send data to analytics service (implement as needed)
  sendToAnalyticsService(event) {
    // Example: Send to your own analytics endpoint
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(event)
    // }).catch(console.error);
  }

  // Setup automatic tracking
  setupAutoTracking() {
    // Track page view on load
    this.trackPageView();

    // Track time on page when user leaves
    window.addEventListener('beforeunload', () => {
      this.trackTimeOnPage();
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        if (maxScrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          this.trackScrollDepth(maxScrollDepth);
        }
      }
    });

    // Track external link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.href && !link.href.startsWith(window.location.origin)) {
        this.trackExternalClick(link.href, link.textContent || link.href);
      }
    });
  }
}

// Create and export a singleton instance
const analytics = new SimpleAnalytics();
export default analytics;