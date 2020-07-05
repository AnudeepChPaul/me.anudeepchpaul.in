import { connect } from "react-redux";
import React, { createRef } from "react";
import { wrapper } from "@/Redux";
import { fetchAppData } from "@/Redux/actions/App.action";
import Me from "@/Components/Me/Me";
import Header from "@/Components/Header/Header";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Skills from "@/Components/Skills/Skills";
import Helper from "@/Helpers/Helper";
import dynamic from "next/dynamic";

const styles = () => ({
  quickLinks: {
    position: "fixed",
    right: 0,
    top: 0,
  },
});

const Experiences = dynamic(() =>
  import("@/Components/Experiences/Experiences")
);
const Footer = dynamic(() => import("@/Components/Footer/Footer"));
const ProfessionalProjects = dynamic(() =>
  import("@/Components/Projects/ProfessionalProjects")
);
const Package = dynamic(() => import("@/Components/Package/Package"));

class Home extends React.Component {
  headerRef = createRef();
  aboutRef = createRef();
  skillsRef = createRef();
  experiencesRef = createRef();
  projectsRef = createRef();
  footerRef = createRef();

  constructor(props) {
    super(props);

    this.scrollToRefs = this.scrollToRefs.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.state = {
      fabButton: {
        show: false,
      },
    };
  }

  componentDidMount() {
    this.registerServiceWorker();
    window.onscroll = this.onScroll;
  }

  render() {
    return (
      <Header scrollToRefs={this.scrollToRefs}>
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} ref={(node) => (this.aboutRef = node)}>
            <Me
              scrollToExp={() => this.doScrollToRefs("experience")}
              scrollToSkills={() => this.doScrollToRefs("skills")}
            ></Me>
          </Grid>
          <Grid item xs={12} ref={(node) => (this.skillsRef = node)}>
            <Skills></Skills>
          </Grid>
          <Grid item xs={12} ref={(node) => (this.experiencesRef = node)}>
            <Experiences></Experiences>
          </Grid>
          <Grid item xs={12} ref={(node) => (this.projectsRef = node)}>
            <ProfessionalProjects></ProfessionalProjects>
          </Grid>
          <Grid item xs={12} ref={(node) => (this.packageRef = node)}>
            <Package></Package>
          </Grid>
          <Grid item xs={12} ref={(node) => (this.footerRef = node)}>
            <Footer></Footer>
          </Grid>
        </Grid>
      </Header>
    );
  }

  scrollToRefs(evt) {
    const attr =
      evt.target.getAttribute("aria-label") ||
      evt.target.parentElement.getAttribute("aria-label");

    this.doScrollToRefs(attr);
  }

  doScrollToRefs(ref) {
    const scrollOptions = {
      behavior: "smooth",
      block: "center",
      inline: "center",
    };

    switch (ref) {
      case "about_me":
        this.aboutRef.scrollIntoView(scrollOptions);
        break;
      case "skills":
        this.skillsRef.scrollIntoView(scrollOptions);
        break;
      case "experience":
        this.experiencesRef.scrollIntoView(scrollOptions);
        break;
      case "contact":
        this.footerRef.scrollIntoView(scrollOptions);
        break;
      case "work_projects":
        this.projectsRef.scrollIntoView(scrollOptions);
        break;
      case "pay_scale":
        this.packageRef.scrollIntoView(scrollOptions);
        break;
      default:
        this.headerRef.scrollIntoView(scrollOptions);
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
        if (process.env.NODE_ENV === "production") {
          navigator.serviceWorker.register("resume-sw.js");
          Helper.triggerBackgroundSync({ SYNC_INTERVAL: 30000 });
        }
      });
  }

  onScroll() {
    // this.timer && clearTimeout(this.timer);
    // this.timer = setTimeout(() => {
    //   if (document.scrollingElement.scrollTop > 180) {
    //     return (
    //       !this.state.fabButton.show &&
    //       this.setState((state) => {
    //         state.fabButton.show = true;
    //         return state;
    //       })
    //     );
    //   }
    //   this.state.fabButton.show &&
    //     this.setState((state) => {
    //       state.fabButton.show = false;
    //       return state;
    //     });
    // }, 50);
  }
}

export const getStaticProps = wrapper.getStaticProps(async (ctx) => {
  const application = await ctx.store.dispatch(fetchAppData());
  return {
    props: {
      ...application,
    },
  };
});

export default connect()(withStyles(styles)(Home));
