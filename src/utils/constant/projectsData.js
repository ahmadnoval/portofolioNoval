import SuikaImg from "../../assets/medical.png";
import WaIntipImg from "../../assets/remedial.png";
import BamImg from "../../assets/livechat.png";

const projectsData = [
	{
		id: 1,
		title: "Remedial",
		category: "Web",
		desc: "A website application built using react technology, witch generates knowledge & approaches about art and literacy. This remedial program involves several activities that include an understanding of art on millennium art, and practice in graphic printing.",
		img: WaIntipImg,
		link: "https://github.com/ahmadnoval/FE-REMEDIAL",
		additionals: [
			{
				show: false,
			},
		],
		tag: ["Node.js", "Express.js", "API", "React.js", "SQL"],
	},
	{
		id: 2,
		title: "Medical",
		category: "Bot",
		desc: "A health website to buy medicine or check your health with a professional doctor",
		img: SuikaImg,
		link: "https://github.com/ahmadnoval/project_medical",
		additionals: [
			{
				show: false,
			},
		],
		tag: ["PHP", "React.js", "SQL"],
	},
	{
		id: 3,
		title: "Live Chat",
		category: "Web",
		desc: "A chat that I made myself in my spare time",
		img: BamImg,
		link: "https://github.com/ahmadnoval/live-chat",
		additionals: [
			{
				show: false,
			},
		],
		tag: ["React.js"],
	},
];

export default projectsData;
