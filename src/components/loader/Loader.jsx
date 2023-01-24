import React, { Component } from "react";
import { Dna } from "react-loader-spinner";
export default class Loader extends Component {
  render() {
    return (
      <div style={{ margin: "0 auto", width: "500px" }}>
        <Dna
          visible={true}
          height="698"
          width="600"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
}
