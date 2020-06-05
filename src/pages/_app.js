import App from "next/app";
import { wrapper } from "@/Redux";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { Normalize } from "styled-normalize";

import "@/pages/app.scss";

export default wrapper.withRedux(
  class MeAnudeepChPaul extends App {
    render() {
      const { Component, pageProps } = this.props;
      return (
        <>
          <Normalize />
          <div className="global_main_class">
            <Header />
            <Component {...pageProps}></Component>
            <Footer />
          </div>
        </>
      );
    }
  }
);
