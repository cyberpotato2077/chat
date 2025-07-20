import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/chat/")({
	component: Chat,
});

function Chat() {
	return (
		<div>
			<Link to="/chat/$chatId" params={{ chatId: "1" }} className="[&.active]:font-bold">
				Chat 1
			</Link>
			<Link to="/chat/$chatId" params={{ chatId: "2" }} className="[&.active]:font-bold">
				Chat 2
			</Link>
		</div>
	);
}
