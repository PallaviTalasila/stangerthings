const BASE_URL = "https://strangers-things.herokuapp.com";
const COHORT_NAME = "2010-unf-rm-web-pt";

export async function register(username, password) {
  try {
    const response = await fetch(
      `${BASE_URL}/api/${COHORT_NAME}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function login(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT_NAME}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchPosts(token, formData) {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT_NAME}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const results = await response.json();
    return results.data;
  } catch (error) {
    throw error;
  }
}

export async function addPost(token, formData) {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT_NAME}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
