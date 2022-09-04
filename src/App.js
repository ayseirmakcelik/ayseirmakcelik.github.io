import './App.css';
import Navbar from "./common/Navbar";
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import {Box} from "@mui/material";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {works} from "./apiMock";

function App() {

  const cursorStyle = useSelector(state => state.cursorStyleReducer)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {

    function mouseMove(e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    hover: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#0059ff",
      mixBlendMode: "difference",
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#ff9900",
      mixBlendMode: "difference",
    },
    hoverWorkCard: {
      width: 500,
      height: 500,
      x: mousePosition.x - 250,
      y: mousePosition.y - 250,
      opacity: 0
    }
  }

  return (
    <>
      <motion.div
        variants={variants}
        className={'cursor'}
        animate={cursorStyle}
      ></motion.div>
      <Navbar/>
      <Box style={{
        height: '100vh',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Box style={{
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "center"
        }}>
          <Routes>
            <Route index path={'/'} element={<Home/>}/>
            <Route path={'/works'} element={<Works works={works}/>}/>
            <Route path={'/works/:workId'} element={<WorkDetail works={works} />}/>

            <Route path="*" element={<Navigate replace to="/"/>}/>
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;


// comment: do not forget to deploy stuff
// hey
// i love you
// computeHeadingLevel(hello world)
// const q1 = () => {something mathy
//
//
// }