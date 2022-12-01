"use client";
import { useEffect, useState } from "react";

const GetCrypto = (crypto) => {
  const [Crypto, setCrypto] = useState([]);
  useEffect(() => {
    const fetchCryptoData = async () => {
      const cryptoList = await fetch(
        'http://127.0.0.1:8000/crypto/crypto/' + crypto,
        {
          next: { revalidate: 10 },
        }
      );
      debugger;
      const Cryptos = await cryptoList.json();
      setCrypto(Cryptos);
    };
    fetchCryptoData();
  }, []);

  return Crypto;
};

export default function NotePage({ params }) {
  const note = GetCrypto(params.id);
  console.log(note);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{note.name}</h2>
        <p>
          {note.symbol}
          <br />
          {note.amount}
          <br />
          {note.price}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
