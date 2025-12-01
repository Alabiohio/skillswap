export default function RequestSkill() {
    return (
        <div className="pt-24 px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Request a Skill</h1>

            <form className="space-y-4 max-w-lg">
                <input
                    type="text"
                    placeholder="What skill do you need?"
                    className="w-full border p-3 rounded-lg"
                />
                <textarea
                    placeholder="Describe your request"
                    className="w-full border p-3 rounded-lg h-32"
                ></textarea>

                <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    );
}
