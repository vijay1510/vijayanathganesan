import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { att } from "../redux/Action";

const mapStateToProps = (state) => {
  return {
    value: state.attr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ att: att }, dispatch);
};

class Attr extends Component {
  render() {
    const attributes = this.props;

    return (
      <>
        <h4 className='attributes_name'>{attributes && attributes.id + ":"}</h4>

        {attributes.items.map((item) => (
          <div
            className={`${
              this.props?.value.displayValue === item.displayValue
                ? "attr_value"
                : "attr_values"
            }   
                `}
            style={{
              backgroundColor: item.value,
            }}>
            {attributes.id === "Color" ? "" : item.value}
            {console.log(
              this.props?.value.displayValue,
              "hh",
              item.displayValue
            )}
          </div>
        ))}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Attr);
