import { storage } from "../storage";
import { getHistory } from "./handlers";

// Background service workers
// https://developer.chrome.com/docs/extensions/mv3/service_workers/

chrome.runtime.onInstalled.addListener(() => {
  storage.get().then(console.log);

  getHistory().then((history) => {
    console.log({ history });
  });
});

chrome.alarms.onAlarm.addListener((alarm: chrome.alarms.Alarm) => {
  let isTurnedOn: boolean = false;

  storage.get().then(({ isTurnedOn }) => {
    isTurnedOn = isTurnedOn;
  });

  if (alarm.name === "getDayHistory" && isTurnedOn) {
    getHistory().then((historyItems) => {
      console.log(historyItems);
    });
  }
});