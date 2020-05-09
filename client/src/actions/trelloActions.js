import axios from "axios";
import { GET_BOARDS, GET_BOARD, GET_CARDS, GET_CARD, GET_BOARD_MEMBERS } from "./trelloTypes";
import TrelloClient, { Trello } from 'react-trello-client'

// Auth Trello
export const trelloUpdate = () => {
  console.log("Success!")
  alert("Synced!")
}

export const trelloUpdate2 = () => {
  console.log("Success!")
    //Get the users boards
    Trello.get('/members/me/boards/',
    loadedBoards
,
    function() { console.log("Failed to load boards"); }
    );
};

export const loadedBoards = function(boards) {
  boards.forEach(e => {
    console.log(e.name, e.id);
  });
}


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

