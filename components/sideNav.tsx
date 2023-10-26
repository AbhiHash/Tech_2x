"use client";
import { motion } from "framer-motion";

export const CourseSidebar = ({ dbVideos, openVideo }: any) => {
  return (
    <div className="w-1/4 h-screen bg-gray-200 p-4 fixed top-0 left-0 overflow-y-auto">
      <h2 className="text-lg font-semibold"> Content </h2>
      {dbVideos.length > 0 && (
        <ul className="mt-4">
          {dbVideos.map((item: any, index: number) => (
            <motion.li
              key={item._id}
              className="p-2 mb-2 bg-white rounded-lg shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => openVideo(item)}
            >
              {item.VideoKey}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};
