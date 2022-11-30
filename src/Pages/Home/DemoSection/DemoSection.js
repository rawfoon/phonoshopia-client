import React from 'react';
import { FaCheckSquare } from "react-icons/fa";

const DemoSection = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container px-6 py-12 mx-auto">
		<div className="grid items-center gap-4 xl:grid-cols-5">
			<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
				<h2 className="text-4xl md:text-66xl font-bold">Phono<span className='text-violet-400'>Shopia</span></h2>
				<p className="dark:text-gray-400">When it comes to smartphones, we’re the only one place that does it all.</p>
			</div>
			<div className="p-6 xl:col-span-3">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-900">
							<div className="flex items-center mb-4 space-x-4">
								{/* <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" /> */}
								<div>
									<p className="text-xl md:text-3xl font-semibold">Check Price</p>
									{/* <p className="text-sm dark:text-gray-400">CTO of Company Co.</p> */}
								</div>
							</div>
							<p>Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900">
							<div className="flex items-center mb-4 space-x-4">
								{/* <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" /> */}
								<div>
									<p className="text-xl md:text-3xl font-semibold">Schedule Pickup</p>
									{/* <p className="text-sm dark:text-gray-400">CTO of Company Co.</p> */}
								</div>
							</div>
							<p>Book a free pickup from your home or work at a time slot as per your convenience</p>
						</div>
					</div>
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-900">
							<div className="flex items-center mb-4 space-x-4">
								{/* <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" /> */}
								<div>
									<p className="text-xl md:text-3xl font-semibold">Get paid instantly</p>
									{/* <p className="text-sm dark:text-gray-400">CTO of Company Co.</p> */}
								</div>
							</div>
							<p>Did we mention you get paid as soon as our executive picks up your device? It’s instant & secure payment all the way!</p>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900">
							<div className="flex items-center mb-4 space-x-4">
								{/* <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" /> */}
								<div>
									<p className="text-xl md:text-3xl font-semibold">Why People Trust Us</p>
									{/* <p className="text-sm dark:text-gray-400">CTO of Company Co.</p> */}
								</div>
							</div>
							<ul>
                                <li><FaCheckSquare className='inline mr-2'/>  One-stop Solution</li>
                                <li><FaCheckSquare className='inline mr-2'/>  Amazing Prices</li>
                                <li><FaCheckSquare className='inline mr-2'/>  Quick & Hassle-free</li>
                                <li><FaCheckSquare className='inline mr-2'/>  Premium Products</li>
                                <li><FaCheckSquare className='inline mr-2'/>  Guaranteed Safety</li>
                            </ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
            
        </div>
    );
};

export default DemoSection;