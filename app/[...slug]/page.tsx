"use client";
import { useParams } from "next/navigation";
import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const CMSPage = () => {
  const { slug } = useParams<{ slug: string[] }>();
  return <div>create world</div>;
};

export default CMSPage;
