import { useContext } from "react";

import { PROFILE_CONFIGS } from "../constants";

import { PageContext } from "../constants";

const useSaleList = () => {
  const {
    state: { profile, sales, currentList },
  } = useContext(PageContext);
  console.log(profile);

  const { buyStatusKey } = PROFILE_CONFIGS[profile];

  const list = sales.filter(({ status, bids, seller }) => {
    switch (currentList) {
      case "bid":
        console.log("bids", bids, profile);
        return bids.some(({ bider }) => bider === profile);
      case "sale":
        return seller === profile;
      case "buy":
        return buyStatusKey.includes(status);
    }
  });

  return list;
};

export default useSaleList;
