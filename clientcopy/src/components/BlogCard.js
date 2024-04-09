import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BlogCard({img,author,title,selectedBlog,OnBlogClick}) {
  return (<div style={{display:'inline-flex'}}>
  <Card sx={{ width: 345,mt:"30px",marginLeft:"50px",height:"28vw"}}>
  <CardMedia
    component="img"
   
    height="140"
    image={img}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Written By {author}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small"onClick={OnBlogClick}>READ NOW</Button>
   
  </CardActions>
</Card>
</div>
   
  );
}