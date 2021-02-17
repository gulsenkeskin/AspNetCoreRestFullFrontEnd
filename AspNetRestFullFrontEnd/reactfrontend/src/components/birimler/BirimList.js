import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table,Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as birimActions from "../../redux/actions/birimActions";
import {Link} from "react-router-dom"
import alertify from "alertifyjs";


class BirimList extends Component {

  componentDidMount() {
    this.props.actions.getBirimler();
  }
  removeBirim(birim) {
    this.props.actions.removeBirim(birim);
    this.props.actions.removeBirimSuccess(birim);
    alertify.error(birim.birimStr + " birimi silindi");
  }

  render() {
    // let sirket = this.props.seciliSirket.sirketId;
    // const birimListe = [];
    // if (sirket) {
    //   // console.log("birimler",this.props.birimler);
    //   this.props.birimler.map((birim) =>
    //     birimListe.push(
    //       <tr key={birim.birimId}>
    //         <th scope="row">{birim.birimId}</th>
    //         <td>{birim.kayitTarihi}</td>
    //         <td>{birim.birimStr}</td>
    //         <td>{birim.eBirimStr}</td>
    //       </tr>
    //     )
    //   );
    // } else {
    //   this.props.birimler.map((b) =>
    //     birimListe.push(
    //       <tr key={b.birimId}>
    //         <th scope="row">{b.birimId}</th>
    //         <td>{b.kayitTarihi}</td>
    //         <td>{b.birimStr}</td>
    //         <td>{b.eBirimStr}</td>
    //       </tr>
    //     )
    //   );
    // }

    return (
      <div>
        <h3>
         <Badge color="info">Birimler</Badge>  <Badge color="success">{this.props.seciliSirket.sirketAdi}</Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Kayıt Tarihi</th>
              <th>Birim Str</th>
              <th>E Birim Str</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {birimListe} */}
            {this.props.birimler.map((b) => (
              <tr key={b.birimId}>
                <th scope="row">{b.birimId}</th>
                <td><Link to={"/savebirim/"+b.birimId}>{b.kayitTarihi}</Link></td>
                <td>{b.birimStr}</td>
                <td>{b.eBirimStr}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeBirim(b)}
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
           

            {/* {this.props.birimler.map((b) => (b.birims.map(birim=>(
              <tr key={b.birimId}>
                <th scope="row">{b.birimId}</th>
                <td>{b.kayitTarihi}</td>
                <td>{b.birimStr}</td>
                <td>{b.eBirimStr}</td>
              </tr>
            ))))} */}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    seciliSirket: state.changeSirketReducer,
    birimler: state.birimListReducer,
  };
}

//aksiyonu proplara bağla
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBirimler: bindActionCreators(birimActions.getBirimler, dispatch),
      removeBirim: bindActionCreators(birimActions.removeBirim, dispatch),
      removeBirimSuccess: bindActionCreators(birimActions.removeBirimSuccess, dispatch)

    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BirimList);
