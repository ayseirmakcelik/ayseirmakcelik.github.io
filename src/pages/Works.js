import {Box, Grid} from "@mui/material";
import WorkCard from "../components/WorkCard";

export default function Works({works}) {

  return (
    <Box className={'works'}>
      <Grid className={"worksGrid"} container spacing={0}>
        {works.map((work, index) => (
          <Grid key={index} className={"worksGridItem"} item md={4} lg={4}>
            <WorkCard work={work}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}