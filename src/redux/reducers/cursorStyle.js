const defaultState = {
  x: mousePosition.x - 16,
  y: mousePosition.y - 16
}

const hoverState = {
  x: mousePosition.x - 32,
  y: mousePosition.y - 32
}

export default function cursorReducer(state = defaultState, action) {
  switch (action.type) {
    case "DEFAULT":
      return defaultState
    case "HOVER":
      return
  }
}