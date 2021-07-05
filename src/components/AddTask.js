import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (text.trim().length) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form className="App__Add" onSubmit={validate}>
      <div className="form-control inputDiv">
        <input
        className="input"
          name="text"
          type="text"
          placeholder="Add Task"
          value={text}
          autoComplete="off"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>

      <input className="submit" type="submit" name="Submit" value=">" />
    </form>
  );
};

export default AddTask;
