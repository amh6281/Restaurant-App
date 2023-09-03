export const upload = async (file: File) => {
  const data = new FormData();
  data.append("file", file!);
  data.append("upload_preset", "Restaurant");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dfiijzk7o/image/upload",
    {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: data,
    }
  );
  const resData = await res.json();
  return resData.url;
};
