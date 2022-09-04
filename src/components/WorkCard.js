import {useDispatch} from "react-redux";
import {defaultCursorStyle, hoverWorkCardCursorStyle} from "../redux/actions/cursorStyle";
import {motion} from "framer-motion";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function WorkCard({work}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [style, setStyle] = useState('default')

  const styleVariants = {
    default: {},
    hover: {
      opacity: 1,
      staggerChildren: 0.9
    }
  }

  return (
    <>
      <motion.div
        onMouseEnter={(event) => {
          setStyle('hover')
          // dispatch(hoverWorkCardCursorStyle())
        }}
        onMouseLeave={() => {
          setStyle('default')
          // dispatch(defaultCursorStyle())
        }}
        onClick={() => {
          navigate('/works/' + work.id)
          // dispatch(defaultCursorStyle())
        }}
        className={"workCardBody"}
      >

        <work.icon className={'workCardIcon'} style={{
          fill: style === "hover" ? work.hoverColour : "white"
        }}/>
        <motion.p layoutId={"workTitle_" + work.id} className={"worksCardTitle"} style={{
          color: style === "hover" ? work.hoverColour : "white"
        }}>{work.title}</motion.p>
        <p className={"workCardSubTitle"} style={{
          color: style === "hover" ? work.hoverColour : "white"
        }}>{work.year}</p>

        <motion.img variants={styleVariants}
                    animate={style}
                    className={"workCardBackgroundImage"}
                    src={work.thumbnailUrl}
        ></motion.img>
      </motion.div>
    </>
  )
}