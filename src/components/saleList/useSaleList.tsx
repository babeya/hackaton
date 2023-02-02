import { useContext } from "react";

import { PERSIST_STATE, PROFILE_CONFIGS } from "../constants";

import { PageContext } from "../constants";

const useSaleList = () => {
  const {
    state: { profile, sales, currentList },
  } = useContext(PageContext);

  const { buyStatusKey } = PROFILE_CONFIGS[profile];

  const list = sales.filter(({ status, bids, seller }) => {
    switch (currentList) {
      case "bid":
        return bids.some(({ bider }) => bider === seller);
      case "sale":
        return seller === profile;
      case "buy":
        return buyStatusKey.includes(status);
    }
  });

  return list;
};

export default useSaleList;
