import { connect } from "react-redux";
import React from "react";
import { wrapper } from "@/Redux";
import { fetchAppData } from "@/Redux/actions/App.action";
import Me from "@/Components/Me/Me";

class Home extends React.Component {
  render() {
    return (
      <main className="container">
        <Me></Me>
        {/* <style jsx></style> */}
      </main>
    );
  }
}

export const getStaticProps = wrapper.getServerSideProps(async (ctx) => {
  console.log("~~~~~~", ctx);
  const application = await ctx.store.dispatch(fetchAppData());
  // const
  return {
    props: {},
  };
});

const mapStateToProps = (state) => {
  return {
    ...state.application,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadAppPref: () => dispatch(fetchAppData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
