import React from 'react'

const style = {
  "close": {
    "float": "right",
    "fontSize": "21px",
    "fontWeight": "bold",
    "lineHeight": "1",
    "color": "#000000",
    "textShadow": "0 1px 0 #ffffff",
    "opacity": "0.2",
    "filter": "alpha(opacity=20)"
  },
  "close_hover": {
    "color": "#000000",
    "textDecoration": "none",
    "cursor": "pointer",
    "opacity": "0.5",
    "filter": "alpha(opacity=50)"
  },
  "close_focus": {
    "color": "#000000",
    "textDecoration": "none",
    "cursor": "pointer",
    "opacity": "0.5",
    "filter": "alpha(opacity=50)"
  },
  "button_close": {
    "padding": "0",
    "cursor": "pointer",
    "background": "transparent",
    "border": "0",
    "WebkitAppearance": "none"
  }
}


const ButtonClose = ({ children, onClick }) => (
  <button
    style={style.close}
    onClick={onClick}
  data-dismiss="modal">
  &times;</button>
)

ButtonClose.propTypes = {
  onClick: React.PropTypes.func
}

export default ButtonClose
