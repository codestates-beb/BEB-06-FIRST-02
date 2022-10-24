import React from "react";
import Detail from "../detail/Detail";

export default function DetailPage({ transfer }) {
  return (
    <div>
      <Detail transfer={transfer} />
    </div>
  );
}
