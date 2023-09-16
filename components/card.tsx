"use client";
import { Card } from "@tremor/react";
import Link from "next/link";

export const CustomCard = () => {
  return (
    <Link href="./course">
      <Card className="h-30 w-60 bg-custom-purple border-none m-16 text-white">
        DATA STRUCTURES AND ALGORITHMS
      </Card>
    </Link>
  );
};
