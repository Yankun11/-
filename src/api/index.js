import { get } from "../utils/request";

const api = {
  getDataInfo(params) {
    return get("http://api.tianapi.com/ncov/index", params);
  },
  getCaseNum(params){
    return get("http://api.tianapi.com/ncovcity/index",params)
  }
};

export default api;
