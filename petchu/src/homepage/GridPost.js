import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import {  withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

class GridPost extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">POST List</ListSubheader>
        </GridListTile>
        {this.props.totalPostinfo.map((data) => (
          <GridListTile key={data.id}>

            <img src={data.thumbnail} alt={data.title} />
            
            <GridListTileBar
              title={data.title}
              subtitle={<span>by: {data.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${data.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    )
  }
}
export default withRouter(GridPost);