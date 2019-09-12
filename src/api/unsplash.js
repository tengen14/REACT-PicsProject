import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID cce3a8c9284b9a3701af9dc9c7fed3b912380b68aa35400bf51afc1883a82094"
  }
});
