const Helper = (function () {
  const convertDate = (date) => {
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

  const subscribeToSW = (cb) => {
    // navigator.serviceWorker.removeEventListener(
    //   "message",
    //   runDispatchFromSWUpdate
    // );
    navigator.serviceWorker.addEventListener("message", (event) => cb(event));
  };

  const triggerBackgroundSync = (config) => {
    setInterval(() => {
      navigator.serviceWorker.ready.then((swRegistration) => {
        return swRegistration.sync.register("cors");
      });
    }, config.SYNC_INTERVAL);
  };

  const toDataURL = function (url) {
    return new Promise((res, rej) => {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
          res(reader.result);
        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    })
  }

  return {
    convertDate,
    subscribeToSW,
    triggerBackgroundSync,
    toDataURL
  };
})();

export default Helper;
