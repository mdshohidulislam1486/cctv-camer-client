import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue} from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraIcon from '@mui/icons-material/Camera';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function OurCollection({mapCCtv}) {
    const {name, img, id, description} = mapCCtv

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card sx={{ maxWidth: 345, m:2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
           <CameraIcon sx={{ fontSize: 30 }} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={id}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {description.slice(0, 100)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <NavLink style={{textDecoration:"none"}}    sx={{textDecoration:"none"}}  to={`/buynow/${mapCCtv.id}`} ><Button  sx={{textDecoration:"none"}} variant='contained' size="small">Buy Now</Button></NavLink>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details</Typography>
          <Typography paragraph>
            {description}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
}

export default OurCollection;
