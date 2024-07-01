chrome.runtime.onInstalled.addListener(() => {
  // Schedule an alarm to trigger after 1 minute
  chrome.alarms.create('thinkingBreakAlarm', { delayInMinutes: 0 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'thinkingBreakAlarm') {
    // Send a notification with buttons
    chrome.notifications.create('thinkingBreakNotification', {
      type: 'basic',
      iconUrl: 'icon48.png',
      title: 'Time for a Thinking Break',
      message: 'It\'s time to take a break and think!',
      priority: 2,
      buttons: [
        { title: 'Not now' },
        { title: 'Sure' }
      ]
    });
  }
});

chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
  if (notificationId === 'thinkingBreakNotification') {
    if (buttonIndex === 0) {
      // "Not now" button clicked
      chrome.alarms.create('thinkingBreakAlarm', { delayInMinutes: 2 });
    } else if (buttonIndex === 1) {
      // "Sure" button clicked
      chrome.notifications.clear(notificationId);
      chrome.windows.create({
        url: 'questions.html',
        type: 'popup',
        width: 400,
        height: screen.height,
        left: screen.width - 400,
        top: 0
      });
    }
  }
});
