import React from "react";
import { Watch } from "../components";

export function WatchContainer() {
  return (
    <div>
      <Watch>
        <Watch.Video src="/videos/batman.mp4" />
      </Watch>
    </div>
  );
}
