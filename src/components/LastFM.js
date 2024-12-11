import { useLastFM } from "use-last-fm";

const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
const username = process.env.REACT_APP_LASTFM_USERNAME;

const CurrentlyPlaying = () => {
    const lastFM = useLastFM(username, apiKey);

    if (lastFM.status !== 'playing') {
        return <div className="flex justify-center items-center w-36 h-36 bg-black rounded-full absolute circle-container">
            <p className="text-white">Not listening to music</p>;
        </div>
        
    }

    console.log(lastFM.song.name);
    console.log(lastFM.song.artist);
    console.log(lastFM.song.art);
    return (
        <a href={lastFM.song.url} target="_blank" rel="noreferrer" className="flex justify-center items-center w-36 h-36 rounded-full absolute circle-container bg-black flex-col text-white">
            <div className="flex justify-center items-center relative group">
                <img src={lastFM.song.art} alt="album art" className="w-full h-full rounded-full" />
                <div className="flex justify-center items-center flex-col absolute h-full w-full rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[60%]">{lastFM.song.name}</p>
                    <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[90%]">{lastFM.song.artist}</p>
                </div>
            </div>
            {/* 
                <div className="flex justify-center items-center relative">
                    <img src={lastFM.song.art} alt="album art" className="w-36 h-36 rounded-full" />
                    <div className="absolute">
                        <p className="text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[60%]">{lastFM.song.name}</p>
                        <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[90%]">{lastFM.song.artist}</p>
                    </div>
                </div>
            */}
            {/*
                <div className="flex justify-center items-center relative">
                    <img src={lastFM.song.art} alt="album art" className="w-36 h-36 rounded-full" />
                    <div className="flex justify-center items-center flex-col absolute h-full w-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[60%]">{lastFM.song.name}</p>
                        <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[90%]">{lastFM.song.artist}</p>
                    </div>
                </div>
            */}
        </a>
    );
};

export default CurrentlyPlaying;