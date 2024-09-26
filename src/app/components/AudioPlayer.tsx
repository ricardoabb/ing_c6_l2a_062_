"use client"
import { useRef, useEffect } from 'react';
import { useInfoStore } from '../store/useInfoStore';

const AudioPlayer: React.FC = () => {

    const { isPlaying, isMuted, setIsMuted } = useInfoStore();
    const audioRef = useRef<HTMLAudioElement>(null);
    const fadeOutDuration = 300;


    const fadeOutAudio = () => {
        if (audioRef.current) {
            const fadeInterval = fadeOutDuration / 10; // Intervalo entre cada ajuste de volume
            const volumeStep = audioRef.current.volume / 10; // Quantidade de volume a ser reduzida em cada passo

            const fadeOut = setInterval(() => {

                if (audioRef.current && audioRef.current.volume > volumeStep) {
                    audioRef.current.volume -= volumeStep;
                } else {
                    clearInterval(fadeOut);
                    if (audioRef.current) {
                        audioRef.current.volume = 0;
                        audioRef.current.pause();
                        audioRef.current.currentTime = 0; // Retorna o áudio ao início
                    }
                }
            }, fadeInterval);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.volume = 0;
                return;
            }

            if (isPlaying) {
                audioRef.current.play();
                audioRef.current.volume = 1;
            } else {
                fadeOutAudio();
            }

        }

    }, [isPlaying]);



    return (
        <div className="absolute right-5 top-9 flex items-center z-50">
            <button className="" onClick={() => setIsMuted({isMuted: !isMuted})}>
                {!isMuted ? (
                    <svg className='w-7 md:w-[41px]' width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="9.99997" width="3.96" height="13" rx="1.98" fill="white" />
                        <path d="M6.92004 11.1493C6.92004 10.4377 7.29819 9.77963 7.91305 9.42132L21.0731 1.75233C22.4064 0.975336 24.08 1.93713 24.08 3.48032V29.5197C24.08 31.0629 22.4064 32.0247 21.0731 31.2477L7.91305 23.5787C7.29819 23.2204 6.92004 22.5623 6.92004 21.8507V11.1493Z" fill="white" />
                        <path d="M37.3962 0.583718L36.3334 1.29743C37.3962 0.583718 37.3965 0.584176 37.3968 0.584654L37.3975 0.585712L37.3991 0.588192L37.4032 0.594615L37.415 0.613292C37.4244 0.628331 37.437 0.648544 37.4524 0.673898C37.4834 0.724603 37.5259 0.795885 37.5784 0.887488C37.6833 1.07068 37.828 1.33524 37.9989 1.67913C38.3409 2.36682 38.7882 3.37242 39.2328 4.67934C40.1224 7.29433 41 11.1136 41 16C41 20.8864 40.1224 24.7057 39.2328 27.3207C38.7882 28.6276 38.3409 29.6332 37.9989 30.3209C37.828 30.6648 37.6833 30.9293 37.5784 31.1125C37.5259 31.2041 37.4834 31.2754 37.4525 31.3261C37.437 31.3515 37.4244 31.3717 37.415 31.3867L37.4032 31.4054L37.3991 31.4118L37.3975 31.4143L37.3968 31.4153C37.3965 31.4158 37.3962 31.4163 36.3334 30.7026L37.3962 31.4163C37.0095 32.0146 36.2202 32.1801 35.6332 31.7859C35.0472 31.3924 34.8847 30.5894 35.269 29.9914L35.2706 29.9889L35.2713 29.9877C35.2747 29.9823 35.2812 29.9719 35.2906 29.9565C35.3094 29.9257 35.3398 29.8749 35.3801 29.8045C35.4608 29.6636 35.5812 29.4441 35.7284 29.148C36.0229 28.5558 36.424 27.6579 36.8279 26.4706C37.6353 24.0973 38.4546 20.5653 38.4546 16C38.4546 11.4347 37.6353 7.90273 36.8279 5.52935C36.424 4.34209 36.0229 3.44422 35.7284 2.85201C35.5812 2.55594 35.4608 2.33643 35.3801 2.19554C35.3398 2.12511 35.3094 2.07434 35.2906 2.04352C35.2812 2.02811 35.2747 2.01768 35.2713 2.01227L35.2687 2.00816C34.8844 1.41018 35.0472 0.607636 35.6332 0.214118C36.2202 -0.180054 37.0095 -0.0145787 37.3962 0.583718Z" fill="white" />
                        <path d="M31.7851 6.16784C31.4897 5.5191 31.7652 4.74874 32.4013 4.44614C33.0382 4.14316 33.7956 4.42386 34.0928 5.07312L32.9588 5.61252C34.0928 5.07312 34.093 5.07353 34.0932 5.07395L34.0946 5.07697L34.0969 5.0822L34.1035 5.09676C34.1086 5.10829 34.1153 5.12347 34.1234 5.14226C34.1396 5.17985 34.1616 5.23192 34.1885 5.2983C34.2424 5.43104 34.316 5.62103 34.4025 5.86681C34.5756 6.35834 34.8007 7.07315 35.024 7.99952C35.4705 9.85268 35.9092 12.5513 35.9092 16C35.9092 19.4488 35.4705 22.1473 35.024 24.0005C34.8007 24.9269 34.5756 25.6417 34.4025 26.1332C34.316 26.379 34.2424 26.569 34.1885 26.7017C34.1616 26.7681 34.1396 26.8202 34.1234 26.8578L34.1145 26.8782L34.1035 26.9033L34.0969 26.9178L34.0946 26.923L34.0932 26.9261C34.093 26.9265 34.0928 26.9269 32.9532 26.3848L34.0928 26.9269C33.7956 27.5761 33.0382 27.8569 32.4013 27.5539C31.7654 27.2514 31.4899 26.4816 31.7847 25.833L31.7855 25.8311L31.7937 25.8123C31.8024 25.7924 31.8168 25.7583 31.8363 25.7103C31.8752 25.6143 31.9343 25.4626 32.0068 25.2566C32.1519 24.8447 32.351 24.2159 32.552 23.3816C32.9539 21.7136 33.3637 19.223 33.3637 16C33.3637 12.777 32.9539 10.2864 32.552 8.61839C32.351 7.78416 32.1519 7.15536 32.0068 6.74342C31.9342 6.53746 31.8752 6.38575 31.8363 6.28974C31.8168 6.24173 31.8024 6.20766 31.7937 6.18769L31.7851 6.16784Z" fill="white" />
                        <path d="M28.2729 9.94603L29.3642 9.27858C29.0026 8.66421 28.2208 8.46499 27.6181 8.83361C27.0176 9.20086 26.8214 9.99317 27.1775 10.6066L27.1777 21.3932C26.8213 22.0067 27.0175 22.7991 27.6181 23.1664C28.2208 23.5351 29.0026 23.3358 29.3642 22.7215L28.2819 22.0595C29.3642 22.7215 29.3645 22.721 29.3648 22.7206L29.3653 22.7196L29.3665 22.7176L29.3692 22.7129L29.376 22.7011C29.3811 22.6922 29.3874 22.6811 29.3948 22.6678C29.4095 22.6413 29.4286 22.6062 29.4514 22.5625C29.4969 22.4752 29.5573 22.3537 29.6273 22.199C29.7674 21.8896 29.9464 21.4467 30.1229 20.8771C30.4761 19.7371 30.8183 18.0918 30.8183 16C30.8183 13.9082 30.4761 12.2629 30.1229 11.1229C29.9464 10.5534 29.7674 10.1104 29.6273 9.80103C29.5573 9.64631 29.4969 9.52486 29.4514 9.43755C29.4286 9.39389 29.4095 9.35874 29.3948 9.33222C29.3874 9.31895 29.3811 9.30784 29.376 9.2989L29.3692 9.28711L29.3665 9.28244L29.3653 9.28041L29.3648 9.27947C29.3645 9.27902 29.3642 9.27858 28.2729 9.94603ZM27.1816 10.6137L27.1798 10.6104L27.1806 10.6118L28.2729 9.94603L27.1816 10.6137ZM27.1796 21.3898L27.1777 21.3932L27.1816 10.6137C27.1859 10.6216 27.1934 10.6355 27.2038 10.6555C27.2279 10.7016 27.2669 10.7795 27.3162 10.8883C27.4147 11.1059 27.5539 11.4468 27.6956 11.9042C27.9788 12.8183 28.2729 14.2 28.2729 16C28.2729 17.8001 27.9788 19.1818 27.6956 20.0958C27.5539 20.5533 27.4147 20.8941 27.3162 21.1117C27.2669 21.2205 27.2279 21.2984 27.2038 21.3445C27.1918 21.3676 27.1835 21.3827 27.1796 21.3898ZM27.1811 21.3874L27.1796 21.3898L27.1784 21.3919L27.1811 21.3874ZM27.1811 21.3874C27.1813 21.387 27.1816 21.3866 28.2729 22.054L27.1816 21.3866L27.1811 21.3874Z" fill="white" />
                    </svg>

                ) : (
                    <svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="9.99997" width="3.96" height="13" rx="1.98" fill="white" />
                        <path d="M6.92004 11.1493C6.92004 10.4377 7.29819 9.77963 7.91305 9.42132L21.0731 1.75233C22.4064 0.975336 24.08 1.93713 24.08 3.48032V29.5197C24.08 31.0629 22.4064 32.0247 21.0731 31.2477L7.91305 23.5787C7.29819 23.2204 6.92004 22.5623 6.92004 21.8507V11.1493Z" fill="white" />
                    </svg>

                )}
            </button>
            <audio loop={true} ref={audioRef} src="/voice.wav" preload="auto" />
        </div>
    );
};

export default AudioPlayer;