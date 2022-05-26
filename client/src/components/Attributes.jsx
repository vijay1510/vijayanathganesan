import React, { Component } from "react";

const handleClick = (e) => {
  e.target.style.backgroundColor = "black";
  e.target.style.color = "white";
};

export default class Attributes extends Component {
  render() {
    const attributes = this.props;

    return (
      <>
        <h4 className='attributes_name'>{attributes && attributes.id + ":"}</h4>

        {attributes.items.map((e) => (
          <div
            onClick={(e) => handleClick(e)}
            className='attributes_value'
            style={{
              backgroundColor: e.value,
              width:
                (attributes.id === "Size" && 63) ||
                (attributes.id === "Color" && 55),
              height:
                (attributes.id === "Size" && 45) ||
                (attributes.id === "Color" && 32),

              border: `1px solid ${e.value}`,
            }}>
            {attributes.id === "Color" ? "" : e.value}
          </div>
        ))}
      </>
    );
  }
}
