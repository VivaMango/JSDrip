import axios from "axios";

export default {

    createLog: function(entry) {
        return axios.post("/api/log/createlog", entry);
    }

};