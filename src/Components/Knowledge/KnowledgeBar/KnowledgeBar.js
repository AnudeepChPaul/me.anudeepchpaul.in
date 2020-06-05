import { connect } from "react-redux";
import React from "react";
import { wrapper } from "@/Redux";
import { fetchAppData } from "@/Redux/actions/App.action";
import classes from "./KnowledgeBar.module.scss";

class KnowledgeBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classes.knowledge_bar_component_container}>
        <div className={classes.knowledge_bar_component_header}>
          <span>{this.props.text}</span>
        </div>
        <div className={classes.knowledge_bar_component_indicator}>
          <div
            className={classes.knowledge_bar_component_indicator_bar}
            data-content={`${this.props.value}%`}
            style={{
              width: `${this.props.value}%`,
            }}
          ></div>
        </div>
        <div className={classes.knowledge_bar_component_indicator_value}>
          {this.props.value}
        </div>
        {/* </div> */}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(KnowledgeBar);
