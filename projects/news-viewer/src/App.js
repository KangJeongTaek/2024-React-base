import { useState } from "react";
import axios from "../node_modules/axios/index";



function App() {
  const [data,setData] = useState(null);
  const onClick = () => {
    axios.get(`
    https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    .then(response => {
      setData(response.data);
    })
    .catch(error =>{
      console.log(error);
    });
  };


  return (
    <div>
      <div>
          <button onClick={onClick}>불러오기</button>
      </div>
        
        {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
    </div>
  );
}

export default App;
