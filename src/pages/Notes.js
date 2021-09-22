import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import NoteCard from "../components/NoteCard";
import Masonry from 'react-masonry-css';
import db from "../firebase";
import { onSnapshot, collection, deleteDoc, doc } from "@firebase/firestore";
export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() =>
    onSnapshot(collection(db, "notes"), (snapshot) => {
      setNotes(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));

    })

    , []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };


  const breakPoints = {
    default: 3,
    1100: 2,
    800: 1,
  }

  return (
    <Container>
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
