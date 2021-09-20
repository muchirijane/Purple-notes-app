import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { green, blue, purple, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {

      if (note.category == 'work') return red[300];
      if (note.category == 'todos') return purple[300];
      if (note.category == 'reminders') return blue[200];
      if (note.category == 'money') return green[400];
    }

  }
})

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);

  const avatarText = note.category.split('')[0].toUpperCase();

  return (
    <Card >
      <CardHeader
        avatar={<Avatar className={classes.avatar} arial-label="profile">{avatarText}</Avatar>}
        title={note.title}
        subheader={note.category}
        action={
          <IconButton
            arial-label="delete"
            onClick={() => handleDelete(note.id)}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body1">{note.details}</Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
