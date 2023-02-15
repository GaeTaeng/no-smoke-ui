import React, { Component } from 'react';

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

class LandBuildings extends Component {
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
  };

  // Handle moving to a new tile
  handleMove = (row, col) => {
    const tile = this.state.tiles[row][col];
    const resources = { ...this.state.resources };

    // Update resources based on the new tile
    Object.keys(tileData[tile].resources).forEach(resource => {
      resources[resource] += tileData[tile].resources[resource];
    });

    // Update the state with the new resources
    this.setState({
      resources,
    });
  };

// Handle assigning a job to a person
handleJobChange = (personId, job) => {
    const population = [...this.state.population];
    population[personId] = {
    ...population[personId],
    job,
    };
    this.setState({
    population,
    });
    };
    
    render() {
    const { tiles, resources, population } = this.state;
    return (
        <div>
          <div className="tiles">
            {tiles.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((tile, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className="tile"
                    onClick={() => this.handleMove(rowIndex, colIndex)}
                  >
                    <div className="icon">{tileData[tile].icon}</div>
                    <div className="name">{tileData[tile].name}</div>
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
                ))}
              </div>
            ))}
          </div>
          <div className="resources">
            {Object.keys(resources).map(resource => (
              <div key={resource}>
                {resourceData[resource].icon} {resources[resource]} {resourceData[resource].name}
              </div>
            ))}
          </div>
          <div className="population">
            <h2>Population</h2>
            {population.map(person => (
              <div key={person.id}>
                <div className="icon">{jobData[person.job].icon}</div>
                <div className="name">{jobData[person.job].name}</div>
                <div className="actions">
                  <select
                    value={person.job}
                    onChange={event => this.handleJobChange(person.id, event.target.value)}
                  >
                    {Object.keys(jobData).map(job => (
                      <option key={job} value={job}>
                        {jobData[job].name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
}

export default LandBuildings;
      