import { connect, useSelector } from "react-redux";
import Head from "next/head";
import React from "react";
import { fetchAppData } from "@/Redux/actions/App.action";
import classes from "./Header.module.scss";
import { wrapper } from "@/Redux";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastClicked: null,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {}

  onHeaderClick() {
    window.location.reload();
  }

  onButtonClick(evt) {
    this.state.lastClicked &&
      this.state.lastClicked.classList.remove(classes.selected);

    evt.target.parentElement.classList.add(classes.selected);
    this.setState({
      lastClicked: evt.target.parentElement,
    });

    this.props.scrollToRefs(evt);
  }

  getListOfLinks(list) {
    return (
      list &&
      list.map((button) => (
        <li key={button.linkId} className={classes.link_wrapper} aria-labelledby={button.linkId}>
          <button
            className={classes.header_link}
            onClick={(evt) => this.onButtonClick(evt)}
            aria-labelledby={button.linkId}
          >
            {button.text}
          </button>
        </li>
      ))
    );
  }

  render() {
    return (
      <>
        <Head>
          <title>{this.props.title.title || ""}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={classes.header_wrapper}>
          <div className={classes.header_body_container}>
            <div className={classes.brand_container}>
              <div
                className={classes.brand_logo}
                style={{ backgroundImage: "url(/acp_gold_deep.png)" }}
                onClick={(evt) => this.onHeaderClick()}
              ></div>
            </div>
            <nav className={classes.nav_container}>
              <ul className={classes.links_container}>
                {this.props.header &&
                  this.getListOfLinks(this.props.header.list)}
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.application,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadAppPref: () => dispatch(fetchAppData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
