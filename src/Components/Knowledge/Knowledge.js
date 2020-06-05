import { connect } from "react-redux";
import React from "react";
import { wrapper } from "@/Redux";
import { fetchPersonalData } from "@/Redux/actions/Me.action";
import KnowledgeBar from "./KnowledgeBar/KnowledgeBar";
import classes from "@/Components/Knowledge/Knowledge.module.scss";

class Knowledge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    this.props.fetchPersonalData().then(() => {
      this.setState({
        visible: true,
      });
    });
  }

  render() {
    if (!this.state.visible) {
      return <div className={classes.knowledge_component_container}></div>;
    }
    return (
      <div className={classes.knowledge_component_container}>
        <div className={classes.knowledge_component_body}>
          <div className={classes.knowledge_info_header}>
            <div>01 Professional Skills</div>
          </div>
          <div className={classes.knowledge_info}>
            {this.props.skills &&
              this.props.skills.list.map((skill) => (
                <KnowledgeBar {...skill} key={skill.actionKey} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.application,
    ...state.personal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPersonalData: () => dispatch(fetchPersonalData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Knowledge);
