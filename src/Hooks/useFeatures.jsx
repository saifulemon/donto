import { useEffect, useState } from 'react';

const useFeatures = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/saifulemon/fake-data-all-project/master/Donto/features.json")
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, []);

    return [features, setFeatures];
};

export default useFeatures;