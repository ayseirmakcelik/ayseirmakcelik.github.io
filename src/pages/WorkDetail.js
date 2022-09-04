import {useParams} from "react-router-dom";
import {motion} from "framer-motion";

export default function WorkDetail({works}) {
  let {workId} = useParams()
  let work = works[workId - 1]

  return (
    <>
      <div className={"workDetail"}>
        <motion.p layoutId={'workTitle_' + workId} style={{
          fontFamily: "acumin-pro-condensed, sans-serif",
          fontSize: "4em",
          alignSelf: "flex-start",
          color: "white",
          marginLeft: "30px",
          fontWeight: "bold"
        }}>{work.title}</motion.p>
      </div>
    </>
  )

}