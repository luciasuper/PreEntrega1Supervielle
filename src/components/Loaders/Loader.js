import React from "react";

import { Ping } from "@uiball/loaders";

function Loader() {
  return (
  <div style={{display:"flex",justifyContent:"center"}}>
    <Ping  size={128} speed={2} color="grey"   />;
  </div>
  )
}

export default Loader;