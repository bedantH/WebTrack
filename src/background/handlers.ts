export const getHistory = () => {
  return new Promise((resolve) => {
    chrome.history.search(
      {
        text: "",
        startTime: new Date().setHours(0, 0, 0, 0) - 24 * 60 * 60 * 1000,
        maxResults: 100,
      },
      (historyItems) => {
        resolve(historyItems);
      }
    );
  });
};

export const createAlarm = () => {
  let now = new Date();
  let day = new Date().getDate();

  if (now.getHours() >= 0) {
    day += 1;
  }

  const timestamp = +new Date(
    now.getFullYear(),
    now.getMonth(),
    day,
    0,
    0,
    0,
    0
  );

  chrome.alarms.create("getDayHistory", {
    when: timestamp,
    periodInMinutes: 24 * 60,
  });
};
