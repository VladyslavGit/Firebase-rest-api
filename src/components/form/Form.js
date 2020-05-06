import React, { Component } from "react";
import styles from "./Form.module.css";

export class Form extends Component {
  state = {};

  postNotes = () => {
    fetch("https://my-project-test-a86a8.firebaseio.com/language.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "JAVA" }),
    });
  };

  render() {
    return (
      <>
        <h2 className={styles.title}>Manage your academic plan</h2>
        <form className={styles.form}>
          <label htmlFor="language" className={styles.select}>
            Select a programming language:
            <select
              className={styles.selectList}
              value={this.state.language}
              onChange={this.onChangeSelect}
            >
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Scala">Scala</option>
            </select>
          </label>
          <label htmlFor="data" className={styles.labelForDate}>
            Choose a graduation date:
            <input
              className={styles.selectList}
              type="date"
              name="searchQuery"
              onChange={this.handleImputChange}
              autoComplete="off"
              onKeyDown={this.find}
            />
          </label>
          <label htmlFor="comments">
            <input
              className={styles.input}
              type="text"
              name="searchQuery"
              onChange={this.handleImputChange}
              id={this.inputId}
              placeholder="Add your comments ..."
              autoComplete="off"
              onKeyDown={this.find}
            />
          </label>
          <button
            type="submit"
            className={styles.btnForSelect}
            onClick={this.postNotes}
          >
            Send
          </button>
        </form>
      </>
    );
  }
}
