export default function Contact() {
    return (
        <div>
            <div>
                <h1 className="heading1 text-center"> Contact Page</h1>
                <div>
                    <input type="text" placeholder="First Name" className="border-2 border-[#DDA15E] rounded-md px-4 py-2 mb-4 w-full" /> 
                    <input type="text" placeholder="Last Name" className="border-2 border-[#DDA15E] rounded-md px-4 py-2 mb-4 w-full" /> 
                    <input type="email" placeholder="Email" className="border-2 border-[#DDA15E] rounded-md px-4 py-2 mb-4 w-full" />
                    <textarea placeholder="Your Message" className="border-2 border-[#DDA15E] rounded-md px-4 py-2 mb-4 w-full" rows={5} />
                    <button className="bg-[#003049] text-white px-4 py-2 rounded-md hover:bg-[#669BBC] transition-colors mb-10">Send Message</button>
                </div>
            </div>
            
        </div>
    );
}
