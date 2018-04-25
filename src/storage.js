export const initialState = {
  counters: {
    1: {
      id: 1,
      count: 20,
    },
    2: {
      id: 2,
      count: 20,
    },
  },
};

if(!localStorage.getItem('counterState')) {
  localStorage.setItem('counterState', JSON.stringify(initialState));
}

export const getState = () => JSON.parse(localStorage.getItem('counterState'));

export const setState = newState => localStorage.setItem('counterState', JSON.stringify(newState));

export const resetState = () => localStorage.setItem('counterState', initialState);