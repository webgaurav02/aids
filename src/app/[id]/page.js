'use client'

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import Navbar from '../components/navbar';
import Logos from '../components/logos';

import { IoLocationOutline } from "react-icons/io5"


const PostOfficeDetail = () => {
    const id = usePathname().split('/').pop();
    const [postOffice, setPostOffice] = useState(null);
    const [ictcs, setIctcs] = useState([]);

    useEffect(() => {
        const fetchPostOffice = async () => {
            if (id) {
                const response = await fetch(`/api/postoffices/${id}`);
                const data = await response.json();
                setPostOffice(data.data);
                // Fetch ICTCs based on the district of the post office
                fetchICTCs(data.data.district);
            }
        };

        fetchPostOffice();
    }, [id]);

    const fetchICTCs = async (district) => {
        const response = await fetch(`/api/ictc?district=${district}`);
        const data = await response.json();
        if (data.success) {
            setIctcs(data.data); // Set ICTCs in state
        }
    };

    useEffect(() => {
        console.log(ictcs)
    }, [ictcs])

    if (!postOffice) return <p>Loading...</p>;

    return (
        <div className='pb-10'>
            <Navbar />
            <Logos/>
            <h2 className='mt-10 mb-5 md:mx-10 mx-5 text-2xl font-bold uppercase'>Services near {postOffice.post_office_name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-10 px-5">
                {ictcs.map((ictc) => (
                    <div key={ictc._id} className="bg-red-800 text-white border rounded-lg shadow p-4 flex flex-row items-center gap-5">
                        <div><IoLocationOutline className="text-white text-7xl" /></div>
                        <div>
                            <h3 className="font-bold text-2xl mb-5">{ictc.name_of_the_ictc}</h3>
                            <p className="text-white">Location: <b>{ictc.location}, {ictc.district}</b></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostOfficeDetail;
