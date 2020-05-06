import React, { Component } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class Form extends Component {
  state = {};

  state = {
    notes: [],
    loader: true,
    error: null,
  };

  componentDidMount() {
    this.getNotes();
  }

  postNotes = async (post) => {
    // fetch("https://my-project-test-a86a8.firebaseio.com/language.json", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name: "JAVA" }),
    // });
    this.setState({ loader: true });
    try {
      const data = await axios.post(
        "https://my-project-test-a86a8.firebaseio.com/language.json",
        post
      );
      console.log(data);
      await this.getNotes();
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ loader: false });
    }
  };

  getNotes = async () => {
    this.setState({ loader: true });
    try {
      const data = await axios.get(
        "https://my-project-test-a86a8.firebaseio.com/language.json"
      );
      console.log(data.data, "<------Data");

      let transformResponse = data.data
        ? Object.keys(data.data).map((key) => ({
            ...data.data[key],
            id: key,
          }))
        : [];

      this.setState({ notes: transformResponse });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loader: false });
    }
  };

  deleteNote = async (id) => {
    this.setState({ loader: true });
    try {
      await axios.delete(
        `https://my-project-test-a86a8.firebaseio.com/language/${id}.json`
      );
      await this.getNotes();
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loader: false });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const post = {};
    formData.forEach((value, name) => (post[name] = value));
    this.postNotes(post);
  };

  render() {
    const { notes, loader } = this.state;
    return (
      <>
        <h2 className={styles.title}>Manage your academic plan</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor="language" className={styles.select}>
            Select a programming language:
            <select
              className={styles.selectList}
              value={this.state.language}
              onChange={this.onChangeSelect}
              name="select"
            >
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </label>
          <label htmlFor="data" className={styles.labelForDate}>
            Choose a graduation date:
            <input
              className={styles.selectList}
              type="date"
              name="date"
              autoComplete="off"
            />
          </label>
          <label htmlFor="comments">
            <input
              className={styles.input}
              type="text"
              name="comment"
              placeholder="Add your comments ..."
              autoComplete="off"
              maxLength="120"
            />
          </label>
          <button type="submit" className={styles.btnForSelect}>
            Send
          </button>
        </form>
        {loader && (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            className={styles.loader}
          />
        )}
        <h2 className={styles.titleForList}>Your Curriculum</h2>
        <ul className={styles.languageList}>
          {notes.map((note) => (
            <li key={note.id} className={styles.languageListItem}>
              <div className={styles.boxForlistItem}>
                <p className={styles.selectTitle}>{note.select}</p>
                <p className={styles.commentTitle}>{note.comment}</p>
              </div>
              <div className={styles.boxForButton}>
                <p className={styles.dateTitle}>{note.date}</p>
              </div>
              <div className={styles.boxForButton}>
                <button
                  className={styles.btnForSend}
                  onClick={() => this.deleteNote(note.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
