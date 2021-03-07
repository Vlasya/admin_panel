import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        border: '2px solid #9ba4ab',
        color: "white",
        marginBottom: 5,
        display:'flex',
        justifyContent:'space-between',
        height:100,
        padding:15
    }
})

export const AlbumList = ({albumList, getPhotos,userList}) => {
    const getUser=(userId)=>{
        if(userList[userId]){
            return userList[userId].name
        }
    }

    function ListItemStyled() {
        const classes = useStyles();
        return albumList.map(item => {
            return (
                <NavLink key={item.id} to='/albums/album'>
                    <ListItem  onClick={() => getPhotos(item.id)}
                               className={classes.root}>
                        <div>
                            <h4> Album Title</h4>
                            <div>  {item.title}</div>

                        </div>

                        <div  >
                            <h4> User Name</h4>
                            <div>{getUser(item.userId)}</div>

                        </div>
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