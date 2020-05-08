import axios from "axios";

export default {
  getCharacter: function(id){
      return axios.get("/api/user/"+id+"/character");
  },
  // Deletes the book with the given id
  deleteCharacter: function(id) {
    return axios.delete("/api/character/" + id);
  },

};
