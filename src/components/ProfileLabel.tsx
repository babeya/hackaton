import React from "react";

import { ProfileType } from "./types";

import { PROFILE_LABELS } from "./constants";

type Props = { currentProfile: ProfileType; profile: ProfileType };

const ProfileLabel = ({ currentProfile, profile }: Props) => (
  <span>{currentProfile === profile ? "Vous" : PROFILE_LABELS[profile]}</span>
);

export default ProfileLabel;
