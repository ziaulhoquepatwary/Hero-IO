export const getInstalledApps = () => {
    const data = localStorage.getItem("installedApps");
    return data ? JSON.parse(data) : [];
};

export const isAppInstalled = (appId) => {
    const appInstalled = getInstalledApps();
    return appInstalled.includes(appId);
}

export const saveInstalledApp = (appId) => {
    const appInstalled = getInstalledApps();

    if (!appInstalled.includes(appId)) {
        appInstalled.push(appId);
        localStorage.setItem('installedApps', JSON.stringify(appInstalled));
    }
}