import { useEffect, useState } from "react";
const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setHours(Math.floor(date.getHours()));
      setMinutes(Math.floor(date.getMinutes()));
      setSeconds(Math.floor(date.getSeconds()));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const padTwoDigit = (num: number) => {
    if (num > 10) {
      return num.toString();
    } else return `0${num}`;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black">
      <div className="w-full min-h-screen flex flex-col items-center justify-center  max-w-md">
        <p className=" bg-blue-300 w-[500px] h-[140px] rounded-md shadow-lg border-4  border-white items-center justify-center flex flex-row font-bold text-6xl text-white">
          {`${padTwoDigit(hours)} : ${padTwoDigit(minutes)} : ${padTwoDigit(
            seconds
          )}`}
        </p>
      </div>
    </div>
  );
};

export default App;
