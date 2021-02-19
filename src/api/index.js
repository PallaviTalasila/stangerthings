const BASE_URL = "https://strangers-things.herokuapp.com";
const COHORT_NAME = "2010-unf-rm-web-pt";

export async function register() {
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
            username: "pallavit",
            password: "ptpassword",
          },
        }),
      }
    );
    const data = await response.json();
    return data.data.token;
  } catch (error) {
    throw error;
  }
}

export async function login() {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT_NAME}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: "pallavit",
          password: "ptpassword",
        },
      }),
    });
    const data = await response.json();
    console.log(data.data.token);
    return data.data.token;
  } catch (error) {
    throw error;
  }
}

export async function addPost(token, formData) {
  try {
    const response = fetch(`${BASE_URL}/api/${COHORT_NAME}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
