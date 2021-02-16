import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const BirimDetail = ({ sirketler, birim, onSave, onChange }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{birim.birimId ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="birimStr"
        label="Birim Str"
        value={birim.birimStr}
        onChange={onChange}
        error="Hata"
      ></TextInput>

      <TextInput
        name="eBirimStr"
        label="E Birim Str"
        value={birim.eBirimStr}
        onChange={onChange}
        error="Hata"
      ></TextInput>

      <SelectInput
        name="sirketId"
        label="Sirket"
        value={birim.sirketId || ""}
        defaultOption="Seçiniz"
        options={sirketler.map((sirket) => ({
          value: sirket.sirketId,
          text: sirket.sirketAdi,
        }))}
        onChange={onChange}
        error="Hata"
      ></SelectInput>

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default BirimDetail;
