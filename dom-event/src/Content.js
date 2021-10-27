import React, { useEffect, useState } from "react";

const Content = () => {
  const [countdown, setCountdown] = useState(180);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCountdown((prevState) => prevState - 1);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    const time = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [countdown]);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
};

export default Content;
