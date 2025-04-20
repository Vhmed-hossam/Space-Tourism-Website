import React, { useEffect, useState } from 'react'
import useNetworkStatus from '../helpers/handleNetwork';
import { preloadImages } from '../helpers/preloadimages';
import { imageList } from '../Constants/imagelist';

export default function useAppStates() {
    const [loaded, setLoaded] = useState(false);
    const isOnline = useNetworkStatus();
  
    useEffect(() => {
      preloadImages(imageList).then(() => {
        setLoaded(true);
      });
    }, []);

    return { loaded, isOnline };
}
