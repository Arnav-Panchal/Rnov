"use client"
import { useState, useEffect } from 'react';
import { DownloadIcon, Github } from "lucide-react";

import fetch from 'isomorphic-fetch';

function Opensrc() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/Arnav-Panchal', {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      }
    }

    fetchData();
  }, []);

  if (!userData) {
    return <p>Loading GitHub data...</p>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Public Repositories: {userData.public_repos}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default Opensrc;

