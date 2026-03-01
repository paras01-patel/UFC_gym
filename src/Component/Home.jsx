import formalImage from "../assets/formalll.jpeg";



function Home() {
    return (
    <div>
            <nav className="bg-gray-100 text-black w-full">
                <div className="px-8 py-4 flex justify-between items-center">
                    <h1 className="font-extrabold">
                        <span className="text-5xl">UFC</span>
                        <span className="text-2xl underline ml-1">GYM</span>
                    </h1>
                    <ul className="flex space-x-8 font-medium">
                        <li><a href="#" className="hover:text-yellow-500">LOCATIONS</a></li>
                        <li><a href="#" className="hover:text-yellow-500">CLASSES</a></li>
                        <li><a href="#" className="hover:text-yellow-500">COACHING</a></li>
                        <li><a href="#" className="hover:text-yellow-500">ABOUT</a></li>
                        <li><a href="#" className="hover:text-yellow-500">NEWS</a></li>
                        <li><a href="#" className="hover:text-yellow-500 bg-red-500">FREE PASS</a></li>
                    </ul>
                </div>
            </nav>
        <div className="text-center " >
        <h1 className="text-4xl font-light text-center mt-12 font-serif">
            JOIN THE UFC GYM FRANCHISE FAMILY
        </h1>
    <p className="mt-6 text-2xl font-serif">The benefits of the UFC GYM experience aren't exclusive to our members. As a UFC GYM <br />
        franchisee, you'll be part of a growing family of passionate, dedicated business people <br />
        striving to provide the best offerings in fitness to communities around the globe. Here's <br />
        what our UFC GYM Imphal Franchisee has to say about his journey with UFC GYM.</p>
        
        <img 
        src={formalImage} 
        alt="Formal" 
        className="w-72 h-72 object-cover rounded-xl shadow-lg "
      />
        </div>
    </div>


);
}

export default Home;