import React from 'react'
import Image from 'next/image';
import Button from '../Button/Button';
import Link from "next/link";

const DetailedProfile: string = "/Elisha_fold_arm.png"

const ProfileDetailed: React.FC = () => {
    return (
        <div className="raps bg-gray-100 md:flex items-center md:justify-between md:items-center gap-8 md:h-fit">
            <div className="md:w-2/4 md:px-12">
                <p className='w-full md:leading-20 m-auto overflow-x-hidden Montserrat text-[20px] md:text-[24px] leading-10 p-3'>
                    Odemakinde Elisha is a leading Innovative AI Engineer and Research Scientist with professional experience in AI relating to vision analytics. He is a skilled technical Entrepreneur with proven experience in AI app conceptualization design, architectural flow, product development, testing and production level builds of AI systems on GPUs and TPUs. He is building <Link className="italic " href="https://rectlabs.com" as="https://rectlabs.com"> Rectlabs Inc,</Link> an AI research and Innovation company based in Nigeria, Africa.
                </p>
                <div className='p-3'>
                    <Link href="/about">

                    <Button>
                        Read more
                    </Button>
                    </Link>

                </div>

            </div>
            <div className="bg-[#E0D5DD] md:w-2/4 md:h-fit md:pr-12">
                <Image
                    className="m-auto md:object-cover md:inset-0 md:h-fit lg:object-contain "
                    src="/secondPicOfLandingPage.png"
                    alt="Elisha"
                    width={740}
                    height={565}
                    priority
                />
            </div>
        </div>
    )
}

export default ProfileDetailed