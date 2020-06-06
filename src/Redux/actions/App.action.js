export const appState = {
  APP_LOAD_PENDING: "APP_LOAD_PENDING",
  APP_LOAD_FINISHED: "APP_LOAD_FINISHED",
};

const getData = () =>
  new Promise((res, rej) => {
    return setTimeout(() => {
      res({
        type: appState.APP_LOAD_FINISHED,
        payload: {
          title: "ANUDEEP CHANDRA PAUL's Resume",
          header: {
            list: [
              { text: "About me", actionKey: "about_me" },
              { text: "Skills", actionKey: "skills" },
              { text: "Experience", actionKey: "experience" },
              { text: "Package", actionKey: "pay_scale" },
              { text: "Contact", actionKey: "contact" }
            ],
          },
        },
      });
    }, 1000);
  });

export const fetchAppData = () => {
  return (dispatch) => {
    // dispatch({
    //   type: appState.APP_LOAD_PENDING,
    //   payload: {
    //     title: "LOADING",
    //   },
    // });
    return getData().then((data) => dispatch(data));
  };
};
