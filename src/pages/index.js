import { connect } from "react-redux";
import React, { createRef } from "react";
import { wrapper } from "@/Redux";
import { fetchAppData } from "@/Redux/actions/App.action";
import Me from "@/Components/Me/Me";
import Skills from "@/Components/Skills/Skills";
import Experiences from "@/Components/Experiences/Experiences";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import FabButton from "@/Components/Button/FabButton/GotoTop";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToRefs = this.scrollToRefs.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.state = {
      fabButton: {
        show: false,
        text: "Goto Top",
      },
    };
  }

  componentDidMount() {
    this.registerServiceWorker();
    window.onscroll = this.onScroll;
  }

  render() {
    return (
      <>
        <div
          ref={(node) => (this.headerRef = node)}
          className="header_container"
        >
          <Header scrollToRefs={this.scrollToRefs} />
        </div>
        <main className="container">
          <div
            ref={(node) => (this.aboutRef = node)}
            className="aboutme_container"
          >
            <Me></Me>
          </div>
          <div
            ref={(node) => (this.skillsRef = node)}
            className="skills_container"
          >
            <Skills></Skills>
          </div>
          <div
            ref={(node) => (this.experiencesRef = node)}
            className="experience_container"
          >
            <Experiences></Experiences>
          </div>
          <FabButton
            onClick={this.scrollToRefs}
            text={this.state.fabButton.text}
            hide={!this.state.fabButton.show}
          />
        </main>
        <Footer />
      </>
    );
  }

  scrollToRefs(evt) {
    const attr = evt.target.getAttribute("aria-labelledby");

    if (!attr) return this.headerRef.scrollIntoView({ behavior: "smooth" });

    switch (attr) {
      case "about_me":
        this.aboutRef.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        this.skillsRef.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        this.experiencesRef.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }

  registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker
      .getRegistration()
      .then((registration) => {
        return registration && registration.unregister();
      })
      .finally(() => {
        navigator.serviceWorker.register("sw.js");
      });
  }

  onScroll() {
    this.timer && clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      if (document.scrollingElement.scrollTop > 180) {
        return (
          !this.state.fabButton.show &&
          this.setState((state) => {
            state.fabButton.show = true;
            return state;
          })
        );
      }

      this.state.fabButton.show &&
        this.setState((state) => {
          state.fabButton.show = false;
          return state;
        });
    }, 50);
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
