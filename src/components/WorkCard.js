import {Box} from "@mui/material";
import {useDispatch} from "react-redux";
import {defaultCursorStyle, hoverCursorStyle} from "../redux/actions/cursorStyle";
import {motion} from "framer-motion";
import {useState} from "react";


export default function WorkCard({work}) {

  const dispatch = useDispatch()

  const [hovered, setHovered] = useState(false);

  const styleVariants = {
    default: {
      padding: "20px",
      position: "relative",
      border: "1px solid white",
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },

  }

  return (
    <motion.Box variants={styleVariants}

                onMouseEnter={() => dispatch(hoverCursorStyle())}
                onMouseLeave={() => dispatch(defaultCursorStyle())}
                className={"workCardBody"}>
      <work.icon className={'workCardIcon'}/>
      <p className={"worksCardTitle"}>{work.title}</p>
      <p className={"workCardSubTitle"}>{work.year}</p>
    </motion.Box>
  )
}