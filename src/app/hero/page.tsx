"use client"
import style from "./hero.module.css"
import ReactPlayer from "react-player"
import { useEffect,useState } from "react"
import {socket, initSocketConnection} from '../socket/socket'
export default function hero() {
  const [queue, setQueue] = useState<string[]>([]);
  const [messageText, setMessageText] = useState<string>('');

    useEffect(() => {
      const dequeue = () => {
        if (queue.length > 0) {
          const firstMessage = queue[0]; // 큐의 첫 번째 값
          const newQueue = queue.slice(1); // 첫 번째 값 제외한 나머지 값들
          setQueue(newQueue);
          return firstMessage; // 첫 번째 값을 반환
        }
        return ''; // 큐가 비어있을 경우 null 반환
      };

      // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
      socket.on('message', (msg) => {
        setQueue([...queue, msg]);
      });

      setInterval(() => {
        // 5초마다 실행될 함수를 작성합니다.
        setMessageText(dequeue);
      }, 5000);
    });

  return (
    <>
     <div className={style.videoWrapper}>
      <div className={style.videoBox}>
        <p className={style.textBox}>{messageText}</p>
        <ReactPlayer
          url={'/videos/video.mp4'}
          width='100%'         // 플레이어 크기 (가로)
          height='100%'        // 플레이어 크기 (세로)
          playing={true}        // 자동 재생 on
          muted={true}          // 자동 재생 on
          controls={true}       // 플레이어 컨트롤 노출 여부
          light={false}         // 플레이어 모드
          pip={true}            // pip 모드 설정 여부
        >
        </ReactPlayer>
      </div>
     </div>    
    </>
  )
}
