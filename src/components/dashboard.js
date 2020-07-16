import React from "react";

function DashNew(props) {
  let result = props.arr1;
  let newarr=result.map(a => a.site);
  // console.log(newarr);
  return (
    <h1>{newarr}</h1>
  );
}
function LastDate(props) {
  var x = new Date(document.lastModified);
  return x;
}


export {DashNew, LastDate};
