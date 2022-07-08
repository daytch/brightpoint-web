import api from "@api/api";

export default {
  getDetail: (payload) => api.post("/partner/detail", payload),
  getAll: (payload) => api.post("/partner/getallpartner", payload),
};
