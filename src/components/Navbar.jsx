import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    SkillSwap
                </Link>

                <div className="flex gap-6 text-gray-700">
                    <Link to="/browse">Browse Skills</Link>
                    <Link to="/offer">Offer Skill</Link>
                    <Link to="/request">Request Skill</Link>
                </div>
            </div>
        </nav>
    );
}
