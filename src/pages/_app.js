import App from "next/app";
import { wrapper } from "@/Redux";
import "@/pages/app.scss";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default wrapper.withRedux(
  class MeAnudeepChPaul extends App {
    // static async getInitialProps({ Component, ctx }) {
    //   const application = await ctx.store.dispatch(fetchAppData());
    //   return {
    //     pageProps: {
    //       ...application,
    //       ...(Component.getInitialProps
    //         ? await Component.getInitialProps(ctx)
    //         : {}),
    //     },
    //   };
    // }

    // static async getInitialProps({ Component, ctx }) {
    //   const pageProps = Component.getInitialProps
    //     ? await Component.getInitialProps(ctx)
    //     : {};

    //   //Anything returned here can be accessed by the client
    //   return { pageProps: pageProps };
    // }

    render() {
      const { Component, pageProps } = this.props;
      return (
        <div className="global_main_class">
          <Header />
          <Component {...pageProps}></Component>
          <Footer />
        </div>
      );
    }
  }
);
