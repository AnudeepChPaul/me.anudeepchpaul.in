import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootState } from "@/Redux/reducers";
import logger, { createLogger } from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const initStore = () => {
  const store = createStore(
    rootReducer,
    
    composeWithDevTools(
      applyMiddleware(
        thunk,
        createLogger({
          collapsed: true,
          level: process.env.NODE_ENV === "production" ? "error" : "info",
        })
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
