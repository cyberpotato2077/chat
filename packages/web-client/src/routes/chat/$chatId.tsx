import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chat/$chatId")({
	component: Chat,
});

function Chat() {
	const { chatId } = Route.useParams();

	return <div>chat: {chatId}</div>;
}
