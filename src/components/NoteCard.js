import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

import Typography from "@material-ui/core/Typography";
const NoteCard = ({ note, handleDelete }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar arial-label="profile">M</Avatar>}
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
