export default function cursorPositionReducer(state = {
  x: 0,
  y: 0
}, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        x: action.x,
        y: action.y
      }
  }
}