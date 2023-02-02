import { useContext } from "react";

import { PERSIST_STATE, PROFILE_CONFIGS } from "../constants";

import { PageContext } from "../constants";

const useSaleList = () => {
  const {
    state: { profile, sales },
  } = useContext(PageContext);

  const { buyStatusKey } = PROFILE_CONFIGS[profile];

  const list = sales.filter(({ status }) => buyStatusKey.includes(status));

  return list;
};

export default useSaleList;
