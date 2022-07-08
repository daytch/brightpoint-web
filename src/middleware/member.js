import api from "@api/api";

export default {
  login: (payload) => api.post("/member/login", payload),
  getProfile: (payload) => api.post("/member/profile", payload),
  getOffers: (payload) => api.post("/member/getoffers", payload),
  getVouchers: (payload) => api.post("/member/vouchers", payload),
  getTransactions: (payload) => api.post("/member/transactions", payload),
};
