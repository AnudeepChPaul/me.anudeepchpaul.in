import { connect } from "react-redux";
import React from "react";
import { wrapper } from "@/Redux";
import { fetchAppData } from "@/Redux/actions/App.action";
import Me from "@/Components/Me/Me";
import ContactMe from "@/Components/ContactMe/ContactMe";
import Skills from "@/Components/Skills/Skills";
import Experiences from "@/Components/Experiences/Experiences";
import Header from "@/Components/Header/Header";
import { Grid, Container, IconButton, ButtonGroup, withStyles, Drawer } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faLinkedinIn,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faInbox,
  faMailBulk,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ProfessionalProjects from "@/Components/Projects/ProfessionalProjects";

const styles = theme => ({
  quickLinks: {
    position: 'fixed',
    right: 0,
    top:0
  }
})

class Home extends React.Component {
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
        {/* <Container
          disableGutters={false}
          fixed={true}
          style={{ padding: "2px" }}
        > */}
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ margin: "0 0 1px 0" }}>
              <Skills></Skills>
            </Grid>
            <Grid item xs={12}>
              <Experiences></Experiences>
            </Grid>
            <Grid item xs={12}>
              <ProfessionalProjects></ProfessionalProjects>
            </Grid>
          </Grid>
        {/* </Container> */}
      </Header>
    );
  }

  scrollToRefs(evt) {
    const attr = evt.target.getAttribute("aria-label");

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
      case "contact":
        this.footerRef.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }

  registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker.getRegistration().then((registration) => {
      return registration && registration.unregister();
    });
    /* .finally(() => {
      navigator.serviceWorker.register("sw.js");
      Helper.triggerBackgroundSync({SYNC_INTERVAL: 30000})
    }); */
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

export default connect()(withStyles(styles)(Home));
