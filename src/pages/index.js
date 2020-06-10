import { connect } from "react-redux";
import React from "react";
import { wrapper } from "@/Redux";
import { fetchAppData } from "@/Redux/actions/App.action";
import Me from "@/Components/Me/Me";
import Knowledge from "@/Components/Knowledge/Knowledge";

class Home extends React.Component {
  componentDidMount() {
    this.registerServiceWorker();
  }

  render() {
    return (
      <main className="container">
        <Me></Me>
        <Knowledge></Knowledge>
      </main>
    );
  }

  registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker
      .getRegistration()
      .then((registration) => {
          return registration && registration.unregister()
      })
      .finally(() => {
        navigator.serviceWorker.register("sw.js");
      });
  }
}

export const getStaticProps = wrapper.getServerSideProps(async (ctx) => {
  const application = await ctx.store.dispatch(fetchAppData());
  return {
    props: {
      ...application,
    },
  };
});

export default connect()(Home);
