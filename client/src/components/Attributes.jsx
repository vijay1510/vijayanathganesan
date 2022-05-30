import React, { Component } from "react";

export default class Attributes extends Component {
  state = {
    selected: null,
    choose: "false",
  };

  render() {
    const attributes = this.props;
    attributes.items.map((e) => (e.active = this.state.choose));

    return (
      <>
        <h4 className='attributes_name'>{attributes && attributes.id + ":"}</h4>

        {attributes.items.map((item) => (
          <div
            onClick={() =>
              this.setState({
                selected: item.displayValue,
                choose: "true",
              })
            }
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
