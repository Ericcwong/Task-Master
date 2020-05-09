import axios from "axios";
import { GET_BOARDS, GET_BOARD, GET_CARDS, GET_CARD, GET_BOARD_MEMBERS } from "./trelloTypes";

// Auth Trello
export const trelloAuth = () => {
    axios
      .get("/api/trello/authorize")
      .then(res => {
        // Save to localStorage
        // Set token to localStorage
        const { trelloToken } = res.data;
        localStorage.setItem("trelloToken", trelloToken);
      })
      .catch();
  };


//   // Login - get user token
// export const loginUser = userData => dispatch => {
//     axios
//       .get("/api/trello/authorize")
//       .then(res => {
//         // Save to localStorage
//         // Set token to localStorage
//         const { token } = res.data;
//         localStorage.setItem("jwtToken", token);
//       })
//       .catch(err);
//   };

