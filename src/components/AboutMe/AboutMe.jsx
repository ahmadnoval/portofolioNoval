import NavTitle from "../Navigation/NavTitle";

const AboutMe = () => {
	return (
		<section id="about-me">
			<NavTitle title={"About-Me"} />
			<div className="font-normal text-md">
				<p className="mb-4">
					{`I am a full-stack web developer who graduated with a degree in information engineering. Experience working on projects through
Independent Study in the Kampus Merdeka program, volunteering, and collaborative projects. As an adaptable learner, I have
successfully tackled various problem-solving challenges both individually and as part of a team. I am motivated to continue growing and
contributing.`}
				</p>
			</div>

			{/* Next time... */}
			{/* <div className="font-bold text-lg text-slate-400">
        const <span className="text-amber-200">AboutMe</span> ={" "}
        <span className="text-amber-500">{"{ "}</span>`
        <br />
        <p className="ml-4 font-normal text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          corporis dolore nihil voluptatem quas cupiditate dolorum sit numquam
          labore? Blanditiis libero hic soluta nobis. Itaque in officia
          repudiandae illo aliquam?
        </p>
        `<span className="text-amber-500">{"}"}</span>;
      </div> */}
		</section>
	);
};

export default AboutMe;
