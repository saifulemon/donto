import { useEffect, useState } from 'react';

const useFeatures = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await fetch('../FakeData/fakeFeatue.json')
                .then(resp => resp.json())
                .then(data => setFeatures(data.feat));
        }
        fetchData();
    }, []);

    return [features];
};

export default useFeatures;