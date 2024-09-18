const Base_Url = "https://fakestoreapi.com";
const RequestLogin = async (path) => {
  try {
    const response = await fetch(`${Base_Url}/${path}`, {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    alert("oh");
  }
};
const userResponse= async(path)=>{
  try {
    const res=await fetch(`${Base_Url}/${path}`);
    const data=await res.json();
    return data;
  } catch (error) {
    alert('oh')
  }

}
export { RequestLogin , userResponse};
