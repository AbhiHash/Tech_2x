"use client";
import { Card } from "@tremor/react";
import { useRouter } from "next/router";

export const CustomCard = () => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("course");
  };

  return (
    <Card
      className="h-30 w-60 bg-custom-purple border-none m-16 text-white"
      onClick={handleCardClick}
    >
      DATA STRUCTURES AND ALGORITHMS
    </Card>
  );
};
