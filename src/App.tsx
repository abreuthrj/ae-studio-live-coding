import { useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";

const req = axios.create({
  baseURL: "https://api.github.com",
});

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState<any>(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const { data: userInfo } = await req.get(`/users/${user}`);
      const { data: userStarInfo } = await req.get(`/users/${user}/starred`);

      setUserData({ ...userInfo, starCount: userStarInfo.length });
      console.log(userInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="border-2 flex flex-col items-center">
        <form onSubmit={handleSubmit} className="p-8 rounded-md flex gap-4">
          <div className="p-5 border-2 rounded-md">
            <span className="text-gray-300 px-2">github.com/</span>
            <input
              placeholder="GitHub Username"
              className="outline-none"
              onChange={(evt) => setUser(evt.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Go"
            className="px-8 bg-gray-100 font-bold rounded-md hover:bg-gray-200 transition-colors text-gray-500"
          />
        </form>

        {userData && (
          <Profile
            image={userData.avatar_url}
            startCount={userData.starCount}
          />
        )}
      </div>
    </div>
  );
}

export default App;
