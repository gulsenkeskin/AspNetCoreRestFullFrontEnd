import React, { Component } from "react";
import { connect } from "react-redux";

class SirketList extends Component {
  render() {
    return (
      <div>
        <h3>Şirketler</h3>
        <h3>Seçili Şirket: {this.props.seciliSirket} </h3>
      </div>
    );
  }
}

//seçili kategoriyi buraya bağlamak için
function mapStateToProps(state) {
  return {
    //seciliSirket i state listesindeki changeSirketReducer a bağla
    seciliSirket: state.changeSirketReducer,
  };
}

export default connect(mapStateToProps)(SirketList);
