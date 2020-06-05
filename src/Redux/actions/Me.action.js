export const meState = {
  ME_DATA_LOAD_STARTED: "ME_DATA_LOAD_STARTED",
  ME_DATA_LOAD_FINISHED: "ME_DATA_LOAD_FINISHED",
};

const getData = () =>
  new Promise((res, rej) => {
    return setTimeout(() => {
      res({
        type: meState.ME_DATA_LOAD_FINISHED,
        payload: {
          skills: {
            list: [
              {
                text: "HTML5",
                value: `${(Math.random() * 100).toFixed(0)}`,
                actionKey: "html",
              },
              {
                text: "CSS3",
                value: `${(Math.random() * 100).toFixed(0)}`,
                actionKey: "css3",
              },
              {
                text: "Javascript",
                value: `${(Math.random() * 100).toFixed(0)}`,
                actionKey: "javascript",
              },
              {
                text: "React",
                value: `${(Math.random() * 100).toFixed(0)}`,
                actionKey: "react",
              },
            ],
          },
        },
      });
    }, 1000);
  });

export const fetchPersonalData = () => {
  return (dispatch) => {
    dispatch({
      type: meState.ME_DATA_LOAD_STARTED,
    });
    return getData().then((data) => dispatch(data));
  };
};
