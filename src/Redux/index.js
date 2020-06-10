import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootState } from "@/Redux/reducers";
import logger, { createLogger } from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const devMiddlewares =
  createLogger({
    collapsed: true,
    level: "info",
  });

export const initStore = () => {
  const store = createStore(
    rootReducer,

    composeWithDevTools(
      applyMiddleware(
        thunk
      )
    )
  );

  if (module.hot) {
    module.hot.accept("@/Redux/reducers", () => {
      console.log("Replacing reducer");
      store.replaceReducer(require("@/Redux/reducers").default);
    });
  }

  return store;
};

export const wrapper = createWrapper(initStore, { debug: true });
