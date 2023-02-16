import React, { Component } from 'react';
import './LandBuilding.css';

// Define constants for resources
const WOOD = 'wood';
const STONE = 'stone';
const FOOD = 'food';
const FISH = 'fish';

// Define constants for jobs
const UNEMPLOYED = 'unemployed';
const LUMBERJACK = 'lumberjack';
const WARRIOR = 'warrior';
const COOK = 'cook';
const FISHERMAN = 'fisherman';
const CARPENTER = 'carpenter';

// Define the resource object
const resourceData = {
  [WOOD]: {
    name: 'Wood',
    icon: '🪵',
  },
  [STONE]: {
    name: 'Stone',
    icon: '🪨',
  },
  [FOOD]: {
    name: 'Food',
    icon: '🍗',
  },
  [FISH]: {
    name: 'Fish',
    icon: '🐟',
  },
};

// Define the job object
const jobData = {
  [UNEMPLOYED]: {
    name: 'Unemployed',
    icon: '🙂',
  },
  [LUMBERJACK]: {
    name: 'Lumberjack',
    icon: '🌲',
  },
  [WARRIOR]: {
    name: 'Warrior',
    icon: '⚔️',
  },
  [COOK]: {
    name: 'Cook',
    icon: '🍳',
  },
  [FISHERMAN]: {
    name: 'Fisherman',
    icon: '🎣',
  },
  [CARPENTER]: {
    name: 'Carpenter',
    icon: '🔨',
  },
};

// Define the tile object
const tileData = {
  forest: {
    name: 'Forest',
    icon: '🌳',
    resources: {
      [WOOD]: 5,
      [FOOD]: 2,
    },
  },
  lake: {
    name: 'Lake',
    icon: '🏞️',
    resources: {
      [FISH]: 5,
      [FOOD]: 2,
    },
  },
  mountain: {
    name: 'Mountain',
    icon: '⛰️',
    resources: {
      [STONE]: 5,
      [FOOD]: 2,
    },
  },
  grassland: {
    name: 'Grassland',
    icon: '🌱',
    resources: {
      [FOOD]: 5,
    },
  },
};

class LandBuilding extends Component {
  state = {
    tiles: [
      ['forest', 'lake', 'mountain'],
      ['grassland', 'forest', 'lake'],
      ['mountain', 'grassland', 'forest'],
    ],
    resources: {
      [WOOD]: 0,
      [STONE]: 0,
      [FOOD]: 0,
      [FISH]: 0,
    },
    population: [
      {
        id: 0,
        job: UNEMPLOYED,
      },
    ],
    clickedTile: null,
  };

  // Handle moving to a new tile
  handleMove = (row, col) => {
    const tile = this.state.tiles[row][col];
    const resources = { ...this.state.resources };

    // Update resources based on the new tile
    Object.keys(tileData[tile].resources).forEach(resource => {
      resources[resource] += tileData[tile].resources[resource];
    });

    // Update the state with the new resources and clicked tile
this.setState({
    resources,
    clickedTile: {
    row,
    col,
    },
    });
    };
    
    // Handle assigning a job to a person
    handleAssignJob = (personId, job) => {
    const population = [...this.state.population];
    const index = population.findIndex(person => person.id === personId);

    if (index >= 0) {
        population[index].job = job;
        this.setState({ population });
      }
    };

    render() {
    const { tiles, resources, population, clickedTile } = this.state;

    return (
        <div className="game">
          <div className="sidebar">
            <h2>Resources:</h2>
            <ul>
              {Object.keys(resourceData).map(resource => (
                <li key={resource}>
                  {resourceData[resource].icon} {resourceData[resource].name}: {resources[resource]}
                </li>
              ))}
            </ul>
            <h2>Population:</h2>
            <ul>
              {population.map(person => (
                <li key={person.id}>
                  {jobData[person.job].icon} {jobData[person.job].name} ({person.id})
                  <div className="job-buttons">
                    {Object.keys(jobData)
                      .filter(job => job !== person.job)
                      .map(job => (
                        <button key={job} onClick={() => this.handleAssignJob(person.id, job)}>
                          {jobData[job].name}
                        </button>
                      ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="board">
            {tiles.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((tile, colIndex) => (
                  <div
                    key={colIndex}
                    className={`tile ${clickedTile && clickedTile.row === rowIndex && clickedTile.col === colIndex ? 'active' : ''}`}
                    onClick={() => this.handleMove(rowIndex, colIndex)}
                  >
                    <div className="tile-icon">{tileData[tile].icon}</div>
                    <div className="tile-name">{tileData[tile].name}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }
}

export default LandBuilding;