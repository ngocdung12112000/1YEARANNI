import { useRef } from 'react';
import data from '../data';

export default function Slide() {
    const slideRef = useRef<HTMLDivElement>(null);
    const prevClick = (): void => {
        let lists = document.querySelectorAll('.item');
        slideRef.current?.prepend(lists[lists.length - 1]);
    }

    const nextClick = (): void => {
        let lists = document.querySelectorAll('.item');
        slideRef.current?.appendChild(lists[0]);
    }

    return (
        <div className="slide-wrap w-full h-[100vh]">
            <div className="container-slide">
                <div id="slide" ref={slideRef}>
                    <div  className="item"  style={{ backgroundImage: `url(/images/p1.jpg)` }}>
                        <div className="content">
                            <div className="name text-xl"> Our first message </div>
                            <div className="des text-[16px]"> 
                            </div>
                        </div>
                    </div>
                    {
                        data.map((item, index) => (
                            <div key={index} className="item" id={item.text} style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="content">
                                    <div className="name text-xl">{item.title}</div>
                                    <div className="des text-[20px]">{item.text}</div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
                <div className="buttons">
                    <button
                        id="prev"
                        className="me-6 text-[16px] font-bold shadow-2xl"
                        onClick={prevClick}
                    >
                        Prev
                    </button>
                    <button
                        id="next"
                        className="text-[16px] font-bold shadow-2xl"
                        onClick={nextClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}


