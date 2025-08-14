import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    const userData=useLoaderData()
//   const [userData, setUserData] = useState(null);
//     useEffect(()=>{
//         fetch('http://api.github.com/users/Ahmadnaveedofficial')
//         .then(Response=>Response.json())
//         .then(userData=>{
//             console.log(userData);
//             setUserData(userData)
//         })
//     })

  if (!userData) {
    return <div className="text-center mt-10 text-gray-600">Loading GitHub profile...</div>;
  }

  return (
    <section className="flex justify-center mt-12">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <img
          src={userData.avatar_url}
        //   alt={userData.login}
          className="w-32 h-32 rounded-full mx-auto mb-4 "
        />
        <h2 className="text-2xl font-bold text-gray-800">{userData.name || userData.login}</h2>
        {userData.bio && <p className="text-gray-600 mt-2">{userData.bio}</p>}
        {userData.location && (
          <p className="text-gray-500 mt-1">📍 {userData.location}</p>
        )}

        <div className="flex justify-around mt-4 text-gray-700 font-medium">
          <div>
            <p>{userData.followers}</p>
            <p className="text-sm">Followers</p>
          </div>
          <div>
            <p>{userData.following}</p>
            <p className="text-sm">Following</p>
          </div>
          <div>
            <p>{userData.public_repos}</p>
            <p className="text-sm">Repos</p>
          </div>
        </div>

        <a
          href={userData.html_url}
          target="_blank"
          className="inline-block mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold shadow hover:bg-orange-700 transition duration-200"
        >
          Visit GitHub
        </a>
      </div>
    </section>
  );
}

export default GitHub;

export const githubLoder=async () => {
    const Response =await fetch('http://api.github.com/users/Ahmadnaveedofficial')
    return Response.json()
}
