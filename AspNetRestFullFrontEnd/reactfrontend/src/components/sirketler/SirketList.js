import React, { Component } from "react";
import { connect } from "react-redux";

class SirketList extends Component {
  render() {
    return (
      <div>
        <h3>Şirketler</h3>
      </div>
    );
  }
}

export default connect()(SirketList);
