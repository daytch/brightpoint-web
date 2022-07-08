import api from "@api/api";

export default {
  getPurchase: (payload) => api.post("/voucher/purchase", payload),
  getAll: (payload) => api.post("/voucher/getall", payload),
};
