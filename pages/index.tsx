import Link from "next/link"
import { useRef } from 'react';

export default function Home() {
  const sideRef = useRef<HTMLDivElement>(null);

  const onClickBtn = () => {
    sideRef.current?.classList.remove('opacity-0');
    sideRef.current?.classList.add('opacity-100');
    sideRef.current?.classList.remove('w-[1300px]');
    sideRef.current?.classList.add('w-[10px]');

    const audioElement = document.getElementById('audio-player') as HTMLAudioElement;
    audioElement.play();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div
          ref={sideRef}
          className="w-[1300px] absolute top-[50%] -translate-y-[50%]
                    flex justify-between items-center opacity-0 side-section"
        >
          <div>
            <img src="/images/left.png" alt="Picture of the author" className="w-[350px]" />
          </div>
          <div>
            <img src="/images/right.png" alt="Picture of the author" className="w-[350px]" />
          </div>
        </div>
      <div>
        <button type="button" className="btn" onClick={onClickBtn}>
          <strong><label htmlFor="modal_confirm1">CLICK HERE</label></strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
        <div className='modal h-[600px]'>
          <input type="checkbox" name="setingModal" id="modal_confirm1" />
          <div className="header h-[420px]">
            <img src="/images/image1.jpg" alt="Picture of the author" />
            <img src="/images/img2.png" alt="Picture of the author" />
            <img src="/images/img3.png" alt="Picture of the author" />
          </div>
          <div className="content h-[180px]">
            <h1 className='text-[46px] font-bold text-center'>1 YEAR ANNIVERSARY</h1>
            <div className="confirm mx-auto">
              <Link href="/slide">
                <button className="continue h-[50px] w-[120px] font-bold text-[18px] rounded-3xl">CONTINUE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
