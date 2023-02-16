
// Define constants for resources
export const WOOD = 'wood';
export const STONE = 'stone';
export const FOOD = 'food';
export const FISH = 'fish';

// Define constants for jobs
export const UNEMPLOYED = 'unemployed';
export const LUMBERJACK = 'lumberjack';
export const WARRIOR = 'warrior';
export const COOK = 'cook';
export const FISHERMAN = 'fisherman';
export const CARPENTER = 'carpenter';

// Define the resource object
export const resourceData = {
  [WOOD]: {
    name: 'Wood',
    icon: '',
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
export const jobData = {
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
export const tileData = {
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