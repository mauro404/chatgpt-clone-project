"use client";
import { signOut, useSession } from "next-auth/react";
import { collection, query, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import NewChat from "./NewChat";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <div
          className="border-t border-gray-500 py-8"
        >
          <div className="flex items-center space-x-2 rounded-lg px-5 py-3 text-gray-300 hover:bg-gray-700/70 hover:opacity-50 cursor-pointer transition-all ease-out" onClick={() => signOut()}>
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
          <p className="text-base">Log out</p>
          </div>

        </div>
      )}
    </div>
  );
}

export default SideBar;
