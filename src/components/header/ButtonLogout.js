import React, { Component } from "react";
import styles from "./ButtonLogout.module.css";

export class ButtonLogout extends Component {
  state = { modalIsOpen: false };

  handleModal = () => {
    this.setState({ modalIsOpen: true });
  };

  render() {
    const { modalIsOpen } = this.state;
    return (
      <>
        <button
          type="button"
          className={styles.logOutBtn}
          onClick={this.handleModal}
        ></button>
        {modalIsOpen ? (
          <div className={styles.modalBackdrop}>
            <div className={styles.modalBox}>
              <strong className={styles.logoutQuestion}>
                Do you really want to log out?
              </strong>
              <div className={styles.answerBox}>
                <button
                  type="button"
                  className={styles.btnForLogout}
                  onClick={() => console.log("Exit")}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={styles.btnForLogout}
                  onClick={() =>
                    this.setState({ modalIsOpen: !this.state.modalIsOpen })
                  }
                >
                  No
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}
