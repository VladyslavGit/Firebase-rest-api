import axios from "axios";

export default {
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
      throw new Error(error);
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
      throw new Error(error);
    }
  },
  async sendData(post) {
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
  },
};
