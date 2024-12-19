
import React, { useEffect, useState } from 'react';

const YouTubePlayer = ({ videoId }) => {

    function getYouTubeThumbnailUrl(videoUrl, quality = 'hq') {
        // Extract video ID from the URL
        const videoIdMatch = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);

        if (!videoIdMatch || !videoIdMatch[1]) {
            // Invalid or missing video ID
            return null;
        }

        const videoId = videoIdMatch[1];

        // Construct the thumbnail URL based on the quality
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;


        return thumbnailUrl;
    }

    const [showVideo, setShowVideo] = useState(false);

    const handleThumbnailClick = () => {
        setShowVideo(true);
    };

    const getYoutubeUrl = `https://www.youtube.com/watch?v=${videoId}`

    const youtubeVideoUrl = `https://www.youtube.com/embed/${videoId}`

    useEffect(() => {


        return () => {

        }
    }, [])


    return (
        <div >
            {!showVideo && (
                <div onClick={handleThumbnailClick} className='relative cursor-pointer' >
                    <img src={getYouTubeThumbnailUrl(getYoutubeUrl)} alt="Video Thumbnail" />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        ▶
                    </div>
                </div>
            )}

            {showVideo && (
                <iframe
                    width="100%"
                    height="100%"
                    src={youtubeVideoUrl}
                    frameBorder="0"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default YouTubePlayer;