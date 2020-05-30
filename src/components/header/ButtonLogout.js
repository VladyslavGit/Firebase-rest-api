import React, { Component } from "react";
import styles from "./ButtonLogout.module.css";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/auth/operations";

class ButtonLogout extends Component {
  state = { modalIsOpen: false };

  componentDidMount = () => {
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("keydown", this.onKeydown);
    console.log("this.props", this.props.logOutAction);
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("keydown", this.onKeydown);
  };

  setBoxForRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ modalIsOpen: false });
    }
  };

  onKeydown = (event) => {
    if (event.keyCode === 27) {
      this.setState({ modalIsOpen: false });
    }
  };

  handleModal = () => {
    this.setState({ modalIsOpen: true });
  };

  logOut = () => {
    this.props.logOutAction();
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
            <div className={styles.modalBox} ref={this.setBoxForRef}>
              <strong className={styles.logoutQuestion}>
                Do you really want to log out?
              </strong>
              <div className={styles.answerBox}>
                <button
                  type="button"
                  className={styles.btnForLogout}
                  onClick={this.logOut}
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

function mapDispatchToProps(dispatch) {
  return {
    logOutAction: () => {
      dispatch(logoutUser);
    },
  };
}

export default connect(null, mapDispatchToProps)(ButtonLogout);
