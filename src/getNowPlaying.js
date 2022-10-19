import { getAccessToken } from "./getAccessToken";

const NOW_PLAYING_URL = `https://api.spotify.com/v1/me/player/currently-playing`;

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
  console.log(access_token);

  return fetch(NOW_PLAYING_URL, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export { getNowPlaying };
