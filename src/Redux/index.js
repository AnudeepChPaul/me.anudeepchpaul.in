import { createStore, applyMiddleware } from "redux";
import rootReducer from "@/Redux/reducers";
import { createLogger } from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const devMiddlewares = applyMiddleware(
  thunk,
  createLogger({
    collapsed: true,
    level: "info",
  })
);

const prodMiddlewares = applyMiddleware(thunk);

export const initStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      process.env.NODE_ENV === "production" ? prodMiddlewares : devMiddlewares
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
