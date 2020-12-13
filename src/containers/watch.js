import React from "react";
import { Watch } from "../components";
import { TrailerContext } from "../context/trailer";

export function WatchContainer() {
  return (
    <TrailerContext.Consumer>
      {(value) =>
        value ? (
          <Watch>
            <Watch.Video src={value} />
          </Watch>
        ) : null
      }
    </TrailerContext.Consumer>
  );
}
