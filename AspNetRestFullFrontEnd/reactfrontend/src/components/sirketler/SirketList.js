import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as sirketActions from "../../redux/actions/sirketActions";



class SirketList extends Component {
  componentDidMount() {
    //uygulama açıldığında dataları çeker
    this.props.actions.getSirketler();
  }

    //sirketi seçme eventi
    selectSirket = (s) => {
      this.props.actions.changeSirket(s);   
    };


  render() {
    return (
      <div>
        <h3>Şirketler</h3>
        <ListGroup>
         
          {this.props.sirketler.map((s) => (
            <ListGroupItem active={s.sirketId===this.props.seciliSirket.sirketId} onClick={() => this.selectSirket(s)} key={s.sirketId}>
              {s.sirketAdi}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

//seçili kategoriyi buraya bağlamak için
function mapStateToProps(state) {
  return {
    //seciliSirket i state listesindeki changeSirketReducer a bağla
    seciliSirket: state.changeSirketReducer,
    sirketler: state.sirketListReducer,
  };
}

//aksiyonu proplara bağla
function maspDispatchToProps(dispatch) {
  return {
    actions: {
      getSirketler: bindActionCreators(sirketActions.getSirketler, dispatch),
      seciliSirket:bindActionCreators(sirketActions.seciliSirket,dispatch)

    },


  };
}

export default connect(mapStateToProps, maspDispatchToProps)(SirketList);