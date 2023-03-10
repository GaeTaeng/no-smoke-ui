 
import React, { Component, useEffect, useState } from 'react';
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

const INIT_MAP = [
  ['forest', 'lake', 'mountain'],
  ['grassland', 'forest', 'lake'],
  ['mountain', 'grassland', 'forest'],
]
export default function LandBuilding({}){
  const [tileSize, setTileSize] = useState({x : 2, y : 3})
  const [tiles, setTiles] = useState(INIT_MAP);
  const [resources, setResources] = useState({
    [WOOD]: 0,
    [STONE]: 0,
    [FOOD]: 0,
    [FISH]: 0, 
  })

  const [population, setPopulation] = useState([
    {
      id: 0,
      job: UNEMPLOYED,
    },
  ])

  const [clickedTile, setClickedTile] = useState(null)

  
  useEffect(() => { 
    // arr[5][2] (null로 초기화하여 생성)
    const temp_tiles = Array.from(Array(tileSize.y), () => Array(tileSize.x).fill(null))

    for (let i = 0; i < tileSize.y; i++) {
      for (let j = 0; j < tileSize.x; j++) {
        const type = Math.floor(Math.random() * Object.keys(tileData).length); 
        temp_tiles[i][j] = Object.keys(tileData)[type];
      } 
    }
    setTiles(temp_tiles);
  }, [])
  
  // Handle moving to a new tile
  const handleMove = (row, col) => {
    const tile = tiles[row][col]; 

    // Update resources based on the new tile
    Object.keys(tileData[tile].resources).forEach(resource => {
      resources[resource] += tileData[tile].resources[resource];
    });

    // Update the state with the new resources and clicked tile
    setResources(resources);
    setClickedTile({row, col}); 
  };
 
    
    // Handle assigning a job to a person
    const handleAssignJob = (personId, job) => { 
    const index = population.findIndex(person => person.id === personId);

    if (index >= 0) {
        population[index].job = job;
        setPopulation(population)
      }
    };
  
console.log("tiles : ", tiles)
    return (
        <div className="game-board">
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
                        <button key={job} onClick={() => handleAssignJob(person.id, job)}>
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
                    onClick={() => handleMove(rowIndex, colIndex)}
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