import axios from "axios";
import { auth } from "../firebase/config";

export const services = {
  async getData() {
    try {
      const data = await axios.get(
        "https://my-project-test-a86a8.firebaseio.com/language.json"
      );
      let transformResponse = data.data
        ? Object.keys(data.data).map((key) => ({
            ...data.data[key],
            id: key,
          }))
        : [];
      return transformResponse;
    } catch (error) {
      console.log("error", error);
    }
  },

  async deleteData(id) {
    try {
      const data = await axios.delete(
        `https://my-project-test-a86a8.firebaseio.com/language/${id}.json`
      );
      return data;
    } catch (error) {
      console.log("error", error);
    }
  },

  async sendData(post) {
    try {
      // fetch("https://my-project-test-a86a8.firebaseio.com/language.json", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ name: "JAVA" }),
      // });
      const data = await axios.post(
        "https://my-project-test-a86a8.firebaseio.com/language.json",
        post
      );
      return data;
    } catch (error) {
      console.log("error", error);
    }
  },

  async createUser({ name, email, password }) {
    try {
      const createUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const update = auth.currentUser;
      await update.updateProfile({
        displayName: name,
      });
      return createUser;
    } catch (err) {
      console.log(err.code);
      console.log(err.message);
    }
  },

  async signInUser({ email, password }) {
    try {
      const signInUser = auth.signInWithEmailAndPassword(email, password);
      return signInUser;
    } catch (err) {
      console.log(err.code);
      console.log(err.message);
    }
  },

  async signOutUser() {
    try {
      const signOutUser = auth.signOut();
      return signOutUser;
    } catch (err) {
      console.log(err.code);
      console.log(err.message);
    }
  },
};
