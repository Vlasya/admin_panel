import React from "react";
import {Container, GridList, GridListTile, GridListTileBar, IconButton} from "@material-ui/core";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    gridList: {
        width: '100%',
        height: '100%'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    button: {
        width: 160,
        display: 'block',
        padding: '5px 10px',
        border: '2px solid #9ba4ab',
        backgroundColor: '#2c3b49',
        marginBottom: 10,
        borderRadius: 5,
        color: 'white',
        fontWeight: 900,
        cursor: 'pointer',
        margin: 15

    }
}))


export const Album = () => {
    const album = useSelector(state => state.albumData.selectedAlbum)
    console.log(album)

    const classes = useStyles();

    return (
        <Container>
            <NavLink className={classes.button} to='/albums'> Back to Albums</NavLink>

            <GridList cellHeight={280} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                </GridListTile>
                {album.map((tile) => (
                    <GridListTile key={tile.url}>
                        <img src={tile.url} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>

                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>

        </Container>
    )
}