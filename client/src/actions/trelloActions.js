import axios from "axios";


export const getBoards = (req, res) =>{
    axios
    .get("api/trello/boards")
}