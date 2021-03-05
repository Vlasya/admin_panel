import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        border: '2px solid #9ba4ab',
        color: "white",
        marginBottom:5
    }
})

console.log("LIST")

export const AlbumList = ({albumList}) => {

    function ListItemStyled() {
        const classes = useStyles();
        return albumList.map(item =>{
            return (
                <ListItem key={item.id} className={classes.root}>{item.title}</ListItem>
            )
            })

    }

    return (
        <List>
            <ListItemStyled/>

            <ListItemStyled/>


        </List>
    )
}