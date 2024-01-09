"use client";

import { plans } from "@/components/home/pricing/config";
import { List } from "./list";
import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch("/api/getProducts");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export function BillingPlans() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const response = await getData();
    console.log("fetchPrices", response);
    setPrices(response);
  };

  return <List plans={plans} stripe={prices} />;
}
