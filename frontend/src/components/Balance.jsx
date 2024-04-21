import { useState, useEffect } from "react";
import axios from "axios";

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWUyZDQyOWZiZGUzNDA2NWExZTVlNGUiLCJpYXQiOjE3MDkzNjQzMjN9.3wXKpKEJ0b2IUm0gPAPiGFdPjynfQLp2N8gVhakJqxw",
            // Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setBalance(response.data.balance);
    }
    fetchBalance();
  }, []);
  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">Rs. {balance}</div>
    </div>
  );
};
