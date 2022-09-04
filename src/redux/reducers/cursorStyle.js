export default function cursorStyleReducer(state = "default", action) {
  switch (action.type) {
    case "CURSOR_DEFAULT":
      return "default"
    case "CURSOR_HOVER":
      return "hover"
    case "CURSOR_CLICK":
      return "click"
    case "CURSOR_HOVER_WORK_CARD":
      return "hoverWorkCard"
    default:
      return state
  }
}