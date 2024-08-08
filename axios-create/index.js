const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();


const githubClient = axios.create({
    baseURL: 'https://api.GitHub.com',
    timeout: 10000,
    headers: {
        'Accept': 'application/vnd.GitHub.v3+json',    
        // 'Authorization': `token ${process.env.GITHUB_TOKEN}`
    }
});


async function getMostFollowers() {
    const noOfFollowers = 35000;
    const perPage = 10;
    const response = await githubClient.get(`search/users?q=followers:>${noOfFollowers}&per_page=${perPage}`, {timeout: 1500});
    return response.data.items;
}

async function getCounts(username) {
    const response = await githubClient.get(`users/${username}`);
    return {
        username,
        name: response.data.name,
        publicReposCount: response.data.public_repos,
        followersCount: response.data.followers
    };
}

(async()=> {
    try{
        const mostFollowedUsers = await getMostFollowers();
        const popularUserNames = mostFollowedUsers.map(user=>user.login);
        const popularWithPublicRepo = await Promise.all(popularUserNames.map(getCounts));
        console.table(popularWithPublicRepo);
        console.log('======== Another view ==========');
        popularWithPublicRepo.forEach((user)=>console.log(`${user.name} with username ${user.username} has ${user.publicReposCount} public repos and ${user.followersCount} followers on GitHub`));
    } catch(error) {
        console.log(`Error calling GitHub API: ${error.message}`, error);
    }
})();