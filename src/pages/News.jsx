import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/haberSlice";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import loadingGif from "../assets/loading.gif"

const News = () => {
  const mydispatch = useDispatch();
  const {loading}=useSelector(state=>state.haberSlice)
  useEffect(() => {
    mydispatch(getData());
  }, [mydispatch]);
  const {haberler}=useSelector(state=>state.haberSlice)

  return <div>
{ loading ? 
    <Box display="flex" alignItems="center" justifyContent="center">
    <img src={loadingGif} alt="" height="800px"/>
  </Box>  :(

   <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          marginTop="2rem"
          padding="1rem"
          flexWrap="wrap"
        >

{haberler.map((haber)=>(
   <Card sx={{ maxWidth: 345 }}>
   <CardMedia
     sx={{ height: 140 }}
     image={haber.urlToImage}
     title="green iguana"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       {haber.title}
     </Typography>
     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       {haber.description}
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small">Share</Button>
     <Button size="small">Learn More</Button>
   </CardActions>
 </Card>

))}
</Box>) }
  </div>;
};

export default News;
