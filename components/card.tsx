"use client";
import { Card } from "@tremor/react";
import { useRouter } from "next/router";
interface CourseData {
  key: string;
  courseData: {
    _id: string;
    courseName: string;
    courseThumbnailPhoto: string;
    courseTopics: string[];
  };
}
export const CustomCard = (props: CourseData) => {
  const router = useRouter();

  const handleCardClick = () => {
    const courseId = props.courseData._id;
    router.push(`/course/${courseId}`);
  };

  return (
    <Card
      className="h-30 w-60 bg-custom-purple border-none m-16 text-white cursor-pointer"
      onClick={handleCardClick}
    >
      {props.courseData.courseName}
    </Card>
  );
};
