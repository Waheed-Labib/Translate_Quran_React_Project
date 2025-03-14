import { HomePageCarousel } from './HomePageCarousel';
import { SearchModal } from '../../../components/search-modal/SearchModal';
import { useState } from 'react';
import DummySearchBox from '../../../components/dummy-search-box/DummySearchBox';

const HomePageHeroSection = () => {

    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

    return (
        <div className='my-8 mt-12 flex items-center h-[460px] bg-slate-200 rounded'>
            <div className='w-full h-full rounded-l flex flex-col items-center justify-between p-12'>
                <HomePageCarousel></HomePageCarousel>
                <div className='w-full'>
                    <div className='mb-2'>
                        <DummySearchBox
                            setIsSearchModalOpen={setIsSearchModalOpen}
                        ></DummySearchBox>

                        {
                            isSearchModalOpen &&

                            <SearchModal
                                isSearchModalOpen={isSearchModalOpen}
                                setIsSearchModalOpen={setIsSearchModalOpen}
                            ></SearchModal>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageHeroSection;