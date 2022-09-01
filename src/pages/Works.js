import {Box, Grid} from "@mui/material";
import WorkCard from "../components/WorkCard";

export default function Works({works}) {

  return (
    <Box className={'works'}>
      <Grid className={"worksGrid"} container spacing={1}>
        {works.map((work) => (
          <Grid className={"worksGridItem"} item md={4} lg={4}>
            <WorkCard work={work}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}