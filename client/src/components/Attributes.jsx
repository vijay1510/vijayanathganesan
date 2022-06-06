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

class Attributes extends Component {
  state = {
    selected: null,
    cart: [],
  };

  componentDidMount() {
    if (this.state.cart.length === 0) {
      return this.setState({
        selected: this.props.items[0].displayValue,
      });
    } else if (this.state.cart.length !== 0) {
      this.setState({ selected: this.state.cart });
    }
  }
  render() {
    const attributes = this.props;

    const handleClick = (k) => {
      this.setState({
        selected: k.displayValue,
        cart: k.displayValue,
      });
    };

    return (
      <>
        <h4 className='attributes_name'>{attributes && attributes.id + ":"}</h4>

        {attributes.items.map((item) => (
          <div
            onClick={() => handleClick(item)}
            className={`${
              attributes.id === "Color"
                ? "attributes_color"
                : "attributes_value"
            }   ${
              item.displayValue === this.state.selected &&
              attributes.id !== "Color"
                ? "click"
                : ""
            }
            ${
              attributes.id === "Color" &&
              item.displayValue === this.state.selected
                ? "color"
                : ""
            }

          
                `}
            style={{
              backgroundColor: item.value,
            }}>
            {attributes.id === "Color" ? "" : item.value}
          </div>
        ))}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);
