import "../App.css"
import {Box} from "@mui/material";
import {defaultCursorStyle, hoverCursorStyle} from "../redux/actions/cursorStyle";
import {useDispatch} from "react-redux";
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Model} from "../static/3d/Scene";
import {Suspense} from "react";


export default function Home() {

  const dispatch = useDispatch()

  return (
    <Box className={'home'}>
      {/*<Canvas className={'homeHeroCanvas'}>*/}
      {/*  <Suspense fallback={null}>*/}
      {/*    <Model/>*/}
      {/*  </Suspense>*/}
      {/*</Canvas>*/}
      <div className={'homeBannerQuoteTextContainer'}>
        <p onMouseEnter={() => dispatch(hoverCursorStyle())} onMouseLeave={() => dispatch(defaultCursorStyle())}
           className={'homeBannerQuoteText'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </p>
      </div>
    </Box>
  )
}