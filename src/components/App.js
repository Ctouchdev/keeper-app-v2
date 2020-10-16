import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((allNotes) => (
        <Note title={allNotes.title} content={allNotes.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
