import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

class BirimList extends Component {
  render() {
    return (
      <div>
        <h3>Birimler <Badge color="success">{this.props.seciliSirket.sirketAdi}</Badge></h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    seciliSirket: state.changeSirketReducer,
  };
}

export default connect(mapStateToProps)(BirimList);
