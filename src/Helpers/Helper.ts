const Helper = (function () {
  const convertDate = (date: string): string => {
    if (date.toLowerCase() === "current") {
      return "Current";
    }

    const convDate = new Date(date);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${convDate.getFullYear()}-${months[convDate.getMonth()]}`;
  };

  const subscribeToSW = (cb): void => {
    // navigator.serviceWorker.removeEventListener(
    //   "message",
    //   runDispatchFromSWUpdate
    // );
    navigator.serviceWorker.addEventListener("message", (event) => cb(event));
  };

  const triggerBackgroundSync = (config): void => {
    setInterval(() => {
      navigator.serviceWorker.ready.then((swRegistration) => {
        return swRegistration.sync.register("cors");
      });
    }, config.SYNC_INTERVAL);
  };

  return {
    convertDate,
    subscribeToSW,
    triggerBackgroundSync
  };
})();

export default Helper;
