import { Leaf, AlertTriangle } from "lucide-react";

const SustainabilityUnits = () => {
    const initiatives = [
        {
            id: 1,
            icon: <Leaf className="text-green-600" size={22} />,
            title: "The Green Office",
            subtitle: "Coordinating Sustainability Initiatives",
            images: [
                "/mnu/images/sliderimg1.jpeg",
                "/mnu/images/sliderimg2.jpeg",
                "/mnu/images/sliderimg3.jpeg",
            ],
            description: `The Green Office is responsible for coordinating sustainability initiatives, 
      monitoring environmental performance, and promoting green practices across all university facilities.`,
            objectivesTitle: "Key Objectives",
            objectives: [
                "Promote the culture of sustainability across the university community",
                "Enhance social responsibility awareness to address environmental challenges",
                "Rationalize energy consumption through sustainable management programs",
                "Activate environmental monitoring systems to improve carbon footprint",
            ],
            leadership: `Led by the Vice President for Academic Affairs with representation from key academic sectors and student leadership.`,
        },
        {
            id: 2,
            icon: <AlertTriangle className="text-green-600" size={22} />,
            title: "Crisis & Disaster Management",
            subtitle: "Risk Assessment & Emergency Preparedness",
            images: [
                "/mnu/images/sliderimg4.jpeg",
                "/mnu/images/sliderimg5.jpeg",
                "/mnu/images/sliderimg6.jpeg",
                "/mnu/images/sliderimg7.jpeg",
            ],
            description: `The Crisis and Disaster Management Unit works on risk assessment, emergency preparedness, and developing recovery plans 
      to ensure safety and sustainability in response to natural and man-made disasters.`,
            objectivesTitle: "Core Objectives",
            objectives: [
                "Protect all university personnel from injuries and occupational hazards",
                "Preserve university property, facilities, and equipment from damage",
                "Ensure implementation of occupational safety and health standards",
                "Provide effective risk prevention for human and material resources",
            ],
            leadership: `Chaired by the Assistant Coordinator of the Health Sciences Program with representation from multiple academic and administrative departments.`,
        },
    ];

    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    University Initiatives
                </h2>
                <p className="text-gray-600 mt-2">
                    Discover our commitment to sustainability and safety through dedicated administrative units
                </p>
            </div>

            <div className="grid md:grid-rows-2 gap-8">
                {initiatives.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 bg-white"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            {item.icon}
                            <h3 className="text-lg font-semibold text-green-700">
                                {item.title}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {item.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt=""
                                    className="h-32 w-40 object-cover rounded-lg"
                                />
                            ))}
                        </div>

                        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                            {item.description}
                        </p>

                        <h4 className="font-semibold text-gray-900 mb-2">
                            {item.objectivesTitle}
                        </h4>
                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mb-4">
                            {item.objectives.map((obj, index) => (
                                <li key={index}>{obj}</li>
                            ))}
                        </ul>

                        <div className="border-t pt-3 text-sm text-gray-600">
                            <h5 className="font-semibold mb-1">Leadership</h5>
                            <p>{item.leadership}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SustainabilityUnits;
