import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chat")({
	component: About,
});

function About() {
	return <div>about</div>;
}
