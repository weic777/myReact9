import $ from 'jquery';
import { useEffect } from 'react'
import '../css/app0826c.css';
import svg1 from '../assets/react.svg'

const App = () => {
  useEffect(() => {
    $(function () {
      // 現在的寫法
      $('a:has(.ttpShow)').on('mouseover',function (e) {
        $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>')
        $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px', }).fadeIn('fast');
      }).on(function (e) {
        $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px', });
      }).on(function () {
        $('#ttpPanel').remove();
      })
    })
    
    // 過時的寫法
  //   $('a:has(.ttpShow)').mouseover(function (e) {
  //     $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>')
  //     $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px', }).fadeIn('fast');
  //   }).mousemove(function (e) {
  //     $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px', });
  //   }).mouseout(function () {
  //     $('#ttpPanel').remove();
  //   })
  // })
}, [])

return (


  <div className="wrap">
    <h1>Tooltip</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo iure voluptatum quo quae eius quas sunt
      porro? Atque vero quo sequi quae itaque vitae? Quod animi saepe ex adipisci nihil fugit perferendis
      praesentium eveniet autem itaque. Quis neque quae doloribus, rerum repudiandae vero tenetur ea voluptatum
      ipsa explicabo saepe id aliquid numquam enim unde similique officiis magni magnam quaerat expedita. Itaque
      repudiandae, possimus ab nesciunt soluta molestias ducimus accusantium magnam in placeat perferendis
      doloribus earum qui dolorem blanditiis hic praesentium ratione et aperiam at quia. Enim commodi
      <a href="#">
        eligendi
        <span className="ttpShow">Tooltip內容</span>
      </a>, saepe laborum ab quod totam deserunt repudiandae, quos sed, ipsa vitae atque inventore asperiores. Quo
      reiciendis velit voluptatum odit, error tempora minima neque obcaecati debitis, voluptate magnam sit
      quaerat, suscipit numquam rem a ex totam. Itaque neque voluptatum reiciendis libero aliquam ipsam culpa quae
      consequatur totam.
      <a href="#">
        <img src={svg1} alt="" />
        <span className="ttpShow">圖片說明</span>
      </a>

      Mollitia voluptas neque expedita rem fuga animi magni, voluptate ipsam dolores nihil
      fugiat dolorum ad numquam aperiam porro tempora velit veniam perspiciatis vero, quia facere nostrum
      possimus, magnam dolorem! Pariatur ducimus in rerum facere assumenda nam doloremque maiores, rem fugiat
      veritatis? <a href="#">
        Ad
        <span className="ttpShow">Tooltip內容</span>
      </a>, corrupti. Numquam consequatur eligendi debitis illo exercitationem blanditiis error adipisci
      aliquid quidem, in ipsum officiis minima dolorem accusantium expedita necessitatibus? Dolorum, similique
      magni eum obcaecati possimus dolores exercitationem, officia vel fugit dolor, culpa illo nesciunt! Maxime
      quis veritatis facere voluptas quidem dicta minima velit accusamus expedita dolores in consequuntur amet,
      officiis ab iste sapiente necessitatibus asperiores tempore voluptates possimus a eveniet modi! Mollitia
      ipsum consectetur ex veniam provident ut fuga porro ducimus quaerat soluta impedit, consequuntur nostrum
      voluptas aperiam rerum a nisi numquam? Vel deleniti labore beatae veniam enim nesciunt est facere
      consectetur, ullam reprehenderit recusandae adipisci non aliquam voluptates totam alias! Sed quae tenetur
      perspiciatis natus dignissimos, inventore temporibus nostrum similique earum architecto suscipit, optio eos
      dolore tempora illum. Eum ut dolorum consequuntur.
    </p>


  </div>


)
}

export default App