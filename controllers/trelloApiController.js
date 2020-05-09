// import React,{useState, useEffect} from 'react';
import axios from "axios";
// const apiKey = 'b6de011598cbb788e6979d7f6424542a'
// const apiToken = 'e8bba8d08b779e81a24de060abff610356d089db23c672aa0a0ebfc39f8aca7c'
// const boardId = "5ea10749b00d3a216a24532f"

// export default {
//     getBoards: function(apiKey, apiToken){
//         return axios.get(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
//     },
//     getBoardById: function(boardId, apiKey, apiToken){
//         return axios.get(`https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`)
//     },
//     getMembersOfBoard: function(boardId, apiKey, apiToken){
//         return axios.get(`https://api.trello.com/1/boards/${boardId}/members?key=${apiKey}&token=${apiToken}`)
//     },
//     getCards: function(boardId, apiKey, apiToken){
//         return axios.get(`https://api.trello.com/1/boards/${boardId}/cards?key=${apiKey}&token=${apiToken}`)
//     },
//     getCardById: function(boardId, cardId, apiKey, apiToken){
//         axios.get(`https://api.trello.com/1/boards/${boardId}/cards${cardId}?key=${apiKey}&token=${apiToken}`)
//     },
//     updateCardById: function(boardId, cardId, apiKey, apiToken){
//         axios.put(`https://api.trello.com/1/boards/${boardId}/cards${cardId}?key=${apiKey}&token=${apiToken}`)
//     }
// }
// https://www.npmjs.com/package/node-fetch
export function GetBoards(){
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [boards, setBoards] = useState([]);
const [boardId, setBoardId] = useState([]);




useEffect(() => {
    axios
    .get(`https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
    .then(res => 
         res.data)
    .then(
        (result)=>{
            setIsLoaded(true);
            setBoards(result);
        },
        (error)=>{
            setIsLoaded(true);
            setError(error);
        }
    )
    
}, [])
if (error){
    return<div>Error: {error.message}</div>
}else if(!isLoaded){
    return<div>loading...</div>
}else{
    return(
        
    <ul>
        {boards.map(board=>(
            <li key={board.name}>
               <div> {board.name}</div> <div> {board.id}</div>
               <button onClick={()=> setBoardId(board.id)}>Select Board</button>
               </li>
        ))}
        {boardId}
    </ul>
    
        
    
    );
}
}




export function GetBoardbyID (){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [board, setBoard] = useState([]);

    

    useEffect(()=>{
        axios
        .get(`https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`)
        .then(res =>
            res.data)
            .then(
                (result)=>{
                    setIsLoaded(true);
                    setBoard(result);
                },
                (error)=>{
                    setIsLoaded(true);
                    setError(error);
                }
            )
    },[])
    if(error){
        return<div>Error: {error.message}</div>
    }else if(!isLoaded){
        return<div>loading</div>
    }else{
        return(
            <ul>
                <li>{board.name}</li>
                <li>{board.id}</li>
                <li>{board.desc}</li>
                <a href ={board.shortUrl}>{board.name}</a>
                
            </ul>
        )
    }
}
export function GetMembersOfBoard (){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [members, setMembers] = useState([]);

    

    useEffect(()=>{
        axios
        .get(`https://api.trello.com/1/boards/${boardId}/members?key=${apiKey}&token=${apiToken}`)
        .then(res =>
            res.data)
            .then(
                (result)=>{
                    setIsLoaded(true);
                    setMembers(result);
                },
                (error)=>{
                    setIsLoaded(true);
                    setError(error);
                }
            )
    },[])
    if(error){
        return<div>Error: {error.message}</div>
    }else if(!isLoaded){
        return<div>loading</div>
    }else{
        return(
            <ul>
                {members}
                
            </ul>
        )
    }
}
