// ProfileStats.js

import React from 'react';

const ProfileStats = () => {
  return (
    <div>
      <h3 align="left">Languages and Tools:</h3>
      <p align="left">
        <a href="https://developer.android.com" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40"/>
        </a>
        {/* Add other tools and languages here */}
      </p>

      <img src="https://github-readme-streak-stats.herokuapp.com/?user=arnavpanchal9&theme=dark&hide_border=false" alt="GitHub Streak" />
      <img src="https://github-readme-stats.vercel.app/api?username=arnavpanchal9&theme=dark&hide_border=false&include_all_commits=false&count_private=false" alt="GitHub Stats" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=arnavpanchal9&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="Top Languages" />
    </div>
  );
};

export default ProfileStats;
