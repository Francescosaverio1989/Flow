import React, { useEffect, useState } from "react";

export default function Message(message) {
  useEffect(() => {
    console.log("User logged in");
    return (message) => {
      console.log("Bye");
    };
  }, []);
  return <h1>User is logged in</h1>;
}
