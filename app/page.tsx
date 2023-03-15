import {
    SunIcon,
    BoltIcon,
    ExclamationTriangleIcon,
  } from '@heroicons/react/24/outline';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-white h-screen px-2 max-w-xs md:max-w-none overflow-x-hidden">
        <h1 className="text-2xl md:text-4xl font-bold mb-20">ChatGPT </h1>
        <div className="flex space-x-2 text-center">
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <SunIcon className="h-8 w-8 pb-1" />
                    <h2 className="lg:text-base text-sm">Examples</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"What is the difference between npm and yarn?"</p>
                    <p className="infoText">"What are the best coding practices to follow?"</p>
                    <p className="infoText">"Should I use Flexbox or Grid on my project"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <BoltIcon className="h-8 w-8 pb-1" />
                    <h2 className="lg:text-base text-sm">Capabilities</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">This ChatGPT Clone was built using TypeScript and Next.js 13</p>
                    <p className="infoText">Tailwind CSS for styling and Firebase on the backend</p>
                    <p className="infoText">Hot Toast Notification while ChatGPT is thinking</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <ExclamationTriangleIcon className="h-8 w-8 pb-1" />
                    <h2 className="lg:text-base text-sm">Limitations</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">May occasionally generate incorrect information</p>
                    <p className="infoText">May occasionally produce harmful instructions or biased content</p>
                    <p className="infoText">Limited knowledge of world and events after 2021</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage;