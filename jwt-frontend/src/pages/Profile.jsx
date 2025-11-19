import { useEffect, useState } from "react";
import { getProfile } from "../api";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getProfile();
      setProfile(data);
    }
    load();
  }, []);

  if (!localStorage.getItem("token")) {
    window.location.href = "/login";
  }

  return (
    <div className="card">
      <h2>Your Profile</h2>

      {!profile ? <p>Loading...</p> : (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      )}
    </div>
  );
}
