import React, { Component } from "react";
import { resourceData, tileData } from "../Enum";

import "../LandBuilding.css"

export default class Tile extends Component {
    handleClick = () => {
      this.props.onClick(this.props.row, this.props.col);
      this.tile.classList.add('tile-click-animation');
      setTimeout(() => {
        this.tile.classList.remove('tile-click-animation');
      }, 300);
    };
  
    render() {
      const { tile } = this.props;
      const { icon, name } = tileData[tile];
      return (
        <div
          className="tile"
          onClick={this.handleClick}
          ref={(el) => {
            this.tile = el;
          }}
        >
          <span className="icon">{icon}</span>
          <span className="name">{name}</span>
                    {tileData[tile].resources && (
                      <div className="resources">
                        {Object.keys(tileData[tile].resources).map(resource => (
                          <div key={resource}>
                            {resourceData[resource].icon} {tileData[tile].resources[resource]}{' '}
                            {resourceData[resource].name}
                          </div>
                        ))}
                      </div>
                    )}
        </div>
      );
    }
  }
  