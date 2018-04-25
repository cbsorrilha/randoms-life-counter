export const rawState = {
  counters: {
    1: {
      id: 1,
      count: 20
    },
    2: {
      id: 2,
      count: 20
    }
  }
}

if (!localStorage.getItem('counterState')) {
  localStorage.setItem('counterState', JSON.stringify(Object.assign({}, rawState)))
}

export const getState = () => Object.assign({}, JSON.parse(localStorage.getItem('counterState')))

export const setState = newState => localStorage.setItem('counterState', JSON.stringify(newState))

export const resetState = () => localStorage.setItem('counterState', JSON.stringify(Object.assign({}, rawState)))
