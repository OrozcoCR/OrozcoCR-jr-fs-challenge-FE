export const create = async (url) => {
    const postData = new URLSearchParams({ full_url: url });
    
    const response = await fetch("/short_urls.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: postData,
    });
  
    if (!response.ok) {
      const errorMessage = `HTTP error! Status: ${response.status}`;
      throw new Error(errorMessage);
    }
  
    const data = await response.json();
    return data;
  };
  