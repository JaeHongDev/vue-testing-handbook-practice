import axios from "axios";


// The action test should assert:
/*
* was the correct API endpoint used?
* is the payload correct?
* was the correct mutation committed with the result
* * */

export default{
    async authenticate({commit},{username,password}){
        try{
        const authenticated = await axios.post("/api/authenticate",{
            username,password
        })
        commit("SET_AUTHENTICATED",authenticated);
        } catch(e){
            throw Error("API Error occurred.")
        }

    }
}
