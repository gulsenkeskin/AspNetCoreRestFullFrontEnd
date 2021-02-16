import React, { useEffect, useState } from "react";
//useEffect: componentDidMount yerine kullanırız
//setState: state
import { connect } from "react-redux";
import { getSirketler } from "../../redux/actions/sirketActions";
import { saveBirim } from "../../redux/actions/birimActions";
import BirimDetail from "./BirimDetail";

function AddOrUpdateBirim({
  //...props bu komponentin proplarına birimler,sirketler vs ekle demek
  birimler,
  sirketler,
  getBirimler,
  getSirketler,
  saveBirim,
  history,
  ...props
}) {
  const [birim, setBirim] = useState({ ...props.birim });
  const [errors, setErrors] = useState({});
  //şirketleri getirmek için
  useEffect(() => {
    if (sirketler.length === 0) {
      getSirketler();
    }
    setBirim({ ...props.birim });
  }, [props.birim]);

  function handleChange(event) {
    //textbox ın name ve value değerini atar
    const { name, value } = event.target;
    //previous birim statedeki birim demek
    setBirim((previousBirim) => ({
      ...previousBirim,
      [name]: name === "sirketId" ? parseInt(value, 10) : value,
    }));
    validate(name, value);
  }
  function validate(name, value) {
    if (name === "birimStr" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        birimStr: "Birim Str alanı boş bırakılamaz",
      }));
    } else if (name === "eBirimStr" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        birimStr: "E Birim Str alanı boş bırakılamaz",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        birimStr: "",
        eBirimStr: "",
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveBirim(birim).then(() => history.push("/"));
  }

  return (
    <BirimDetail
      birim={birim}
      sirketler={sirketler}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    ></BirimDetail>
  );
}

export function getBirimById(birimler, birimId) {
  let birim = birimler.find((birim) => birim.birimId == birimId) || null;
  return birim;
}
//reduxtaki mevcut stateleri bağlamak için
function mapStateToProps(state, ownProps) {
  const birimId = ownProps.match.params.birimId;
  const birim =
    birimId && state.birimListReducer.length > 0
      ? getBirimById(state.birimListReducer, birimId)
      : {};
  //mevcut state i oluştur
  return {
    birim,
    birimler: state.birimListReducer,
    sirketler: state.sirketListReducer,
  };
}

const mapDispatchToProps = {
  getSirketler,
  saveBirim,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateBirim);
