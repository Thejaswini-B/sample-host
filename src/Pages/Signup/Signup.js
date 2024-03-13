import React, { useEffect, useRef } from 'react'

const Signup = () => {
    const searchInput = useRef(null);




    const initAutocomplete = () => {
        if (!searchInput.current || !window.google || !window.google.maps || !window.google.maps.places) {
            console.error('Google Maps API is not available in trips near me');
            return;
        }

        const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
        autocomplete.setFields(["place_id", "formatted_address", "geometry"]);

    };

    useEffect(() => {
        function loadAsyncScript(src) {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = src;
                script.addEventListener("load", resolve);
                script.addEventListener("error", reject);
                document.head.appendChild(script);
            });
        }

        const initMapScript = () => {
            if (window.google && window.google.maps) {
                return Promise.resolve();
            }

            // Define the Google Maps API script URL
            const src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places&v=weekly`;

            // Load the script asynchronously
            return loadAsyncScript(src);
        };

        // Call the initMapScript function when the component mounts or when the searchInput changes
        initMapScript().then(() => {

            initAutocomplete();
        });


        return () => {
            // Remove the script element from the DOM to avoid memory leaks
            // This will be called when the component is unmounted
            const scriptElement = document.querySelector(`script[src^="https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}"]`);
            if (scriptElement) {
                scriptElement.remove();
            }
        };
    }, [searchInput]);

    return (
        <div>
            SIgnup page
            <input type="text" ref={searchInput} />

        </div>
    )
}

export default Signup
