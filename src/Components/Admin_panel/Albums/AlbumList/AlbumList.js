import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        border: '2px solid #9ba4ab',
        color: "white",
        marginBottom: 5
    }
})


export const AlbumList = ({albumList, getPhotos}) => {

    function ListItemStyled() {
        const classes = useStyles();
        return albumList.map(item => {
            return (
                <NavLink key={item.id} to='/albums/album'>
                    <ListItem  onClick={() => getPhotos(item.id)}
                               className={classes.root}>
                        {item.title}
                    </ListItem>
                </NavLink>
            )
        })

    }

    return (

        <List>
            <ListItemStyled/>
        </List>

    )
}