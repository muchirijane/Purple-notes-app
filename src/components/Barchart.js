import React, { useEffect, useState } from 'react'
import { Bar, Doughnut, defaults } from 'react-chartjs-2'
import db from '../firebase'
// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'
import { doc, onSnapshot, collection } from "firebase/firestore";
import Container from '@material-ui/core/Container'





const BarChart = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "notes"), (snapshot) => {
      setNotes(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      console.log(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
  }, [])
  //const categories = notes.map(note => note.category);
  const noteLabels = [... new Set(notes.map(note => note.category))]

  const categories = notes.map(note => {

    if (note.category === "work") {
      return 1
    }
    if (note.category === "todos") {
      return 2
    }
    if (note.category === "reminders") {
      return 3
    }
    if (note.category === "money") {
      return 4
    }

  });
  console.log(categories);

  const data = {
    labels: noteLabels,
    datasets: [{
      labels: 'catogories',
      data: categories,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }]
  }

  return (
    <div>
      <Doughnut
        data={data}
        height={400}
        width={500}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  )
}

export default BarChart