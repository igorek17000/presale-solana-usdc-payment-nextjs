/* This example requires Tailwind CSS v2.0+ */
import {NextPage} from "next";

const faqs = [
	{
		id: 1,
		question: "What's the best thing about Switzerland?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	// More questions...
]

const Faq: NextPage = () => {
	return (
		<section>
			<div className="max-w-7xl mx-auto py-12 divide-y divide-black lg:py-16 px-2">
				<h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
				<div className="mt-8">
					<dl className="divide-y divide-white">
						{faqs.map((faq) => (
							<div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
								<dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
								<dd className="mt-2 md:mt-0 md:col-span-7">
									<p className="text-base">{faq.answer}</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	)
}

export default Faq;
