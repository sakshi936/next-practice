export default function SpeechBubbleCard() {
	return (
		<div className="p-10 bg-gray-100 flex items-start">
			<div className="relative bg-white p-4 shadow-lg rounded-xl max-w-sm">
				{/* Speech bubble tail */}
				<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rotate-45 shadow-lg"></div>

				{/* Content */}
				<div className="flex items-start space-x-3">
					{/* Icon */}
					<div className="p-2 bg-gray-100 rounded-lg">
						<img src="/icon.png" alt="icon" className="w-8 h-8" />
					</div>

					{/* Text */}
					<div>
						<h3 className="text-lg font-semibold text-gray-900">By Business Type</h3>
						<p className="text-gray-500">Get access to diverse tools to help grow your business.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
