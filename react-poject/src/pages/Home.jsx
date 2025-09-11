import Search from '../components/Search'
import Picture from '../components/Picture'
import '../css/style.css'
import { useEffect, useState } from 'react'

const Home = () => {
    // 文字方塊內容
    const [input, setInput] = useState('')
    // 資料
    const [data, setData] = useState([])
    // 目前頁數
    const [page, setPage] = useState(1);
    // 目前查詢的連結內容
    const [curSearch, setCurSearch] = useState('');
    // api key
    const auth = "6c1EsI8zSoLEKNBPhWvrATsuYQoT1CKkMcBwaU76msML7q3vVr6FXGQZ"
    // 精彩照片連結
    const intialURL = "https://api.pexels.com/v1/curated?per_page=12&page=1"
    // 關鍵字尋連結
    const searchURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=12&page=1`

    // 取得圖片資料
    const search = async (url) => {
        // 更改頁數
        setPage(2);
        // 連上api
        const dataFetch = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        });
        // 取得資料
        const photoData = await dataFetch.json();
        // console.log(photoData)
        setData(photoData.photos)
    }
// 取得更多圖片
const morePic = async () => {
  let newURL;
  if (curSearch === "") {
    newURL = `https://api.pexels.com/v1/curated?per_page=12&page=${page}`;
  } else {
    newURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=12&page=${page}`;
  }

  // 取資料
  const dataFetch = await fetch(newURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });

  const photoData = await dataFetch.json();

  // 串接陣列資料 concat
  setData(data.concat(photoData.photos));

  // 更改頁數
  setPage(page + 1);
};


    useEffect(() => {
        search(intialURL);
    }, [])
    // curSearch異動時重新取得圖片
    useEffect(() => {
        if (curSearch === "") {
            // 沒有關鍵字
            search(intialURL);
        } else {
            // 有關鍵字
            search(searchURL);
        }
    }, [curSearch])

    return (
        <div>
            {/* 搜尋列 */}
            <Search
                // 按下search按鈕時，將查詢的關鍵字帶入searchURL後，在執行search()
                search={() => {
                    setCurSearch(input)
                }}
                // 取得文字方塊內容
                setInput={setInput}
            />
            {/* 顯示圖片 */}
            <div className='pictures'>
                {
                    // 檢查data是否有資料
                    // &&表示有資料
                    data &&
                    data.map((pic) => {
                        return <Picture key={pic.id} data={pic} />
                    })
                }

            </div>
            {/* 更多圖片 */}
            <div className="morePicture">
                 <button onClick={morePic}>Load More</button>
            </div>

        </div>
    )
}

export default Home