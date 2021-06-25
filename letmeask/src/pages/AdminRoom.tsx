import { useHistory, useParams } from "react-router-dom";

import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { Question } from "../components/Question/Question";

import { useRoom } from "../hooks/useRoom";

import { database } from "../services/firebase";

import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";

import "../styles/room.scss";

type RoomParams = {
	id: string;
};

export function AdminRoom() {
	const history = useHistory();
	const params = useParams<RoomParams>();
	const roomId = params.id;

	const { questions, title } = useRoom(roomId);

	async function handleEndRoom() {
		await database.ref(`rooms/${roomId}`).update({
			endedAt: new Date(),
		});

		history.push("/");
	}

	async function handleDeleteQuestion(questionId: string) {
		if (
			window.confirm(
				"Tem certeza que você deseja excluir esta pergunta?"
			)
		) {
			await database
				.ref(`rooms/${roomId}/questions/${questionId}`)
				.remove();
		}
	}

	return (
		<div id="page-room">
			<header>
				<div className="content">
					<img src={logoImg} alt="LetMeAsk" />
					<div>
						<RoomCode code={roomId} />
						<Button isOutlined onClick={handleEndRoom}>
							Encerrar a Sala
						</Button>
					</div>
				</div>
			</header>
			<main className="content">
				<div className="room-title">
					<h1>Sala {title}</h1>
					{questions.length > 0 && (
						<span>
							{questions.length}{" "}
							{questions.length === 1
								? "pergunta"
								: "perguntas"}
						</span>
					)}
				</div>

				<div className="question-list">
					{questions.map((question) => {
						return (
							<>
								<Question
									key={question.id}
									author={question.author}
									content={question.content}
								>
									<button
										type="button"
										onClick={() =>
											handleDeleteQuestion(question.id)
										}
									>
										<img
											src={deleteImg}
											alt="Remover pergunta"
										/>
									</button>
								</Question>
							</>
						);
					})}
				</div>
			</main>
		</div>
	);
}
