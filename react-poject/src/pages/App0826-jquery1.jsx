import $ from 'jquery'
import { useEffect } from 'react'
import '../css/app0826a.css'

const App = () => {
  useEffect(() => {
    // 當滑鼠移碰到圖片時圖片放大
    $('.zoom').on('mouseover', function () {
      $(this).addClass('imgScale');
    })

    // 當滑鼠離開圖片時圖片還原
    $('.zoom').on('mouseout', function () {
      $(this).removeClass('imgScale');
    })
  }, [])


  return (
    <div>
      <h1>useEffect</h1>
      <h2>jQuery圖片縮放</h2>
      <a href="#" className='zoom'>
        <img src="./images/p3.jpg" alt="" />
      </a>
    </div>
  )
}

export default App