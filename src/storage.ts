type IStorage = {
  page: string;
};

const defaultStorage: IStorage = {
  page: "onboard-1",
};

export const storage = {
    get: (): Promise<IStorage> =>
        chrome.storage.sync.get(defaultStorage) as Promise<IStorage>,
    set: (value: IStorage): Promise<void> => chrome.storage.sync.set(value),
};
