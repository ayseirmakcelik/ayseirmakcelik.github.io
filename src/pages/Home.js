import "../App.css"
import {Box} from "@mui/material";
import {defaultCursorStyle, hoverCursorStyle} from "../redux/actions/cursorStyle";
import {useDispatch} from "react-redux";

export default function Home() {

  const dispatch = useDispatch()

  return (
    <Box className={'home'}>
      <p onMouseEnter={() => dispatch(hoverCursorStyle())} onMouseLeave={() => dispatch(defaultCursorStyle())} className={'homeBannerQuoteText'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris.
      </p>
    </Box>
  )
}