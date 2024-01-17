import Image from "next/image";
import localFont from 'next/font/local';

const seoulFont = localFont({ src: '../../public/fonts/SeoulHangangJungL.woff2'});
const muncheWriteFont = localFont({ src: '../../public/fonts/munche_seuki_jung.woff2'});

export default function Home() {
  return (
    <main className={seoulFont.className}>
      <div className="w-full md:w-[375px]">
        <div id="scene_wrapper" className="leading-[0] relative aspect-[2/3]">
          <div
            id="scene_slider"
            className="absolute w-full aspect-[2/3] -z-[1] overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              alt="slider-001"
              src="images/slider/slider_001.jpg"
              fill
            />
          </div>
          <Image
            id="skin_png"
            className="w-full h-full object-cover"
            alt="skin"
            src="images/skin/skin.png"
            fill
          />
          <Image
            id="skin_info"
            className="absolute top-0 left-0 w-full h-full object-cover z-[2]"
            alt="skin_info"
            src="images/skin/skin_info.png"
            fill
          />
        </div>
      </div>
      <div className="bg-amber-50 pt-[25px] pr-[33px] pl-[33px] pb-[43px]">
        <div className="flex justify-between italic text-xs leading-4">
          <div className="text-[#534741]">date.</div>
          <div className="text-[#534741]">04/27</div>
        </div>
        <div className="border border-solid border-[#fece75] rounded-t-[150px] -mt-2.5 px-[15px]">
          <div className="text-xl font-medium pt-10 pb-[30px] text-center">
            <div className="bg-[url('/images/skin/title_image.png')] bg-center bg-no-repeat bg-[length:38px_56px] h-[70px] mb-2.5" />
            <div className={`${muncheWriteFont.className} text-[#534741]`}>초대합니다.</div>
          </div>
          <div className="text-sm leading-6 mb-[30px] text-center text-[#534741]">
            <p>열 번의 사계를 지나, 새로이 준비한 오늘</p>
            <br />
            <p>이제 손을 맞잡고 나란히 걸어온</p>
            <p>지난 10년 여정에 쉼표를 그리며,</p>
            <p>나와 너에서 우리로 시작을 잇고자 합니다.</p>
            <p>배가 될 행복의 마침표로 향한 새 출발의</p>
            <p>준엄한 걸음을 여러분과 함께 내딛고 싶습니다.</p>
            <p>오롯이 귀한 발길을 보태어 자리를 빛내주세요.</p>
          </div>
        </div>
        
      </div>
      {/* <div class="section" id="insa_section" data-section="insa">

        <div class="section_header">
	<div class="section_header_day day_title_wedding_invit"> wedding invitation </div>
	<div class="section_header_day day_title_date"> date. </div>
	<div class="section_header_day day_title_num"> 04/27</div>
</div>


<div id="insa" class="section_body_radius">

	<ul class="insa_title section_title">
        <li class="section_title_img">
            <!--background img 이용 -->
        </li>
        
        <li>
                	    초대합니다.	    </li>

	</ul>

    	<div class="insa_text">열&nbsp;번의&nbsp;사계를&nbsp;지나,&nbsp;새로이&nbsp;준비한&nbsp;오늘<br>
<br>
이제&nbsp;손을&nbsp;맞잡고&nbsp;나란히&nbsp;걸어온<br>
지난&nbsp;10년&nbsp;여정에&nbsp;쉼표를&nbsp;그리며,<br>
나와&nbsp;너에서&nbsp;우리로&nbsp;시작을&nbsp;잇고자&nbsp;합니다.<br>
배가&nbsp;될&nbsp;행복의&nbsp;마침표로&nbsp;향한&nbsp;새&nbsp;걸음을<br>
준결하신&nbsp;여러분과&nbsp;함께&nbsp;내딛고&nbsp;싶습니다.<br>
오직&nbsp;귀한&nbsp;발길만을&nbsp;보태어&nbsp;자리를&nbsp;빛내주세요.</div>   
        
    <table id="insa_family_tbl">
            <tbody><tr class="insa_name_row">
                        <td class="insa_parent_block">
                <div class="parent_name">배승환</div>
                <div class="parent_name">김형자</div>
            </td>
            <td class="insa_rel_block">
                의            </td>
            <td class="insa_ord_block" align="center">
                <span>장남</span>
            </td>
                        <td class="insa_self_block">
                <span>배</span><span>준오</span>
            </td>
        </tr>
            <tr class="insa_name_row">
                        <td class="insa_parent_block">
                <div class="parent_name">이성민</div>
                <div class="parent_name">이솜</div>
            </td>
            <td class="insa_rel_block">
                의            </td>
            <td class="insa_ord_block" align="center">
                <span>장녀</span>
            </td>
                        <td class="insa_self_block">
                <span>이</span><span>지나</span>
            </td>
        </tr>
        </tbody></table>

</div>
    </div> */}
    </main>
  );
}
