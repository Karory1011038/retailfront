import { createStore } from "vuex";
import auth from "@/store/modules/auth";
import customer from "@/store/modules/customer";
import retail from "@/store/modules/retail";
import permissions from "@/store/modules/permissions";

export default createStore({
  modules: {
    auth,
    customer,
    retail,
    permissions
  },
});
