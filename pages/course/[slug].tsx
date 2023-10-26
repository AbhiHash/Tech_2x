import { CustomNavbar } from "components/navBar";
import VideoPlayer from "components/videoplayer";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { topics } from "../../data/topic";
import { courses } from "../../data/course";
import { useEffect, useState } from "react";

export default function CourseTopicPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [courseData, setCourseData] = useState({});
  const [topicData, setTopicData] = useState([]);
  useEffect(() => {
    if (slug) {
      const course: any = courses.filter((data) => data._id == slug);
      setCourseData(course[0]);
      const topic = course[0].courseTopics;
      const returnData = topic.map((ids: string) => {
        const filteredTopic: any = topics.filter((data) => data._id === ids);
        return filteredTopic[0];
      });
      console.log(returnData);
      setTopicData(returnData);
      console.log(topicData, " topic data ");
    }
  }, [slug]);
  const divData = [
    { text: "Array", id: 1 },
    { text: "String", id: 2 },
    { text: "Stack", id: 3 },
    { text: "Linked List", id: 4 },
    { text: "Stack", id: 5 },
    { text: "Stack", id: 5 },
    { text: "Linked List", id: 5 },
    { text: "Linked List", id: 5 },
    { text: "String", id: 5 },
    { text: "Graph", id: 5 },
    { text: "Graph", id: 5 },
  ];
  return (
    <div>
      <CustomNavbar LogOut={signOut} />
      <div className="bg-gradient-to-r from-c-purple to-gray-950 min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="bg-custom-purple w-full md:w-4/5 lg:w-3/5 h-52 rounded-lg text-white mb-8 md:mb-12 lg:mb-16 p-4 text-center">
          DATA STRUCTURES AND ALGORITHMS
        </div>
        <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 w-full md:w-4/5 lg:w-3/5 text-white">
          {topicData.map((item: any) => (
            <Link key={Math.random()} href={`/course/video/${item._id}`}>
              <div className="bg-gradient-to-r from-c-purple to-gray-950 h-12 rounded-lg cursor-pointer flex items-center p-4 text-center">
                {item.PlayListName}
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-custom-purple w-[17vw] h-40 rounded-lg text-white mt-8 md:mt-12 lg:mt-16 p-4 text-center">
          Feedback
        </div>
      </div>
    </div>
  );
}
