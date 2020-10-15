import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Watch } from "../components";

export function WatchContainer() {
  const url = useSelector((state) => state.url, shallowEqual);

  return (
    <div>
      <Watch>
        <Watch.Video src={url} />
      </Watch>
    </div>
  );
}
