import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css'; // Ensure this path is correct

const Portfolio = () => {
    const [photos, setPhotos] = useState([]);
    const accessKey = 'q9hpJ2QAvTWLmJ78bMLQ--wTa_4UVqvwHwnOrYmzwrI'; // Make sure this is your actual access key

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/photos', {
                    params: { per_page: 900 }, // Fetch 9 photos to ensure 3 rows of 3
                    headers: {
                        Authorization: `Client-ID ${accessKey}`
                    }
                });
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching the photos:', error.response ? error.response.data : error.message);
            }
        };

        fetchPhotos();
    }, [accessKey]);

    return (
        <div className="bg-aquamarine p-8">
            <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
            <p className="text-lg mb-6">Here are some of our recent photos:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map(photo => (
                    <div key={photo.id} className="relative">
                        <img
                            src={photo.urls.small}
                            alt={photo.description || 'Unsplash Photo'}
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="absolute bottom-0 left-0 p-2 bg-opacity-50 bg-black text-white text-sm rounded-br-lg">
                            {photo.description || 'Untitled'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
