import { http } from "../config";
import VueJwtDecode from "vue-jwt-decode";

export default {
  all: () => {
    return http.get("/entregador/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
  },
};
