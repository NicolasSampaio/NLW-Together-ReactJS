import { useHistory, useParams } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { RoomCode } from "../../components/RoomCode/RoomCode";
import { Question } from "../../components/Question/Question";

import { useRoom } from "../../hooks/useRoom";

import { database } from "../../services/firebase";

import logoImg from "../../assets/images/logo.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";
import emptyQuestionsImg from "../../assets/images/empty-questions.svg";

import "./room.scss";

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

	async function handleCheckQuestionAnswered(
		questionId: string
	) {
		await database
			.ref(`rooms/${roomId}/questions/${questionId}`)
			.update({
				isAnswered: true,
			});
	}

	async function handleHighlightQuestion(
		questionId: string
	) {
		await database
			.ref(`rooms/${roomId}/questions/${questionId}`)
			.update({
				isHighlighted: true,
			});
	}

	return (
		<div id="page-room">
			<header>
				<div className="content">
					<img
						onClick={() => history.push("/")}
						src={logoImg}
						alt="LetMeAsk"
					/>
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

				{questions.length !== 0 ? (
					<div className="question-list">
						{questions.map((question) => {
							return (
								<>
									<Question
										key={question.id}
										author={question.author}
										content={question.content}
										isAnswered={question.isAnswered}
										isHighlighted={question.isHighlighted}
									>
										{!question.isAnswered && (
											<>
												<button
													type="button"
													onClick={() =>
														handleCheckQuestionAnswered(
															question.id
														)
													}
												>
													<img
														src={checkImg}
														alt="Marcar pergunta como respondida"
													/>
												</button>

												<button
													type="button"
													onClick={() =>
														handleHighlightQuestion(
															question.id
														)
													}
												>
													<img
														src={answerImg}
														alt="Dar destaque à pergunta"
													/>
												</button>
											</>
										)}

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
				) : (
					<>
						<div className="empty-question">
							<img
								src={emptyQuestionsImg}
								alt="Sem perguntas"
								width="150"
								height="150"
							/>
							<h3>Nenhuma pergunta por aqui...</h3>
							<p>
								Envie o código desta sala para seus amigos e
							</p>
							<p>comece a responder perguntas!</p>
						</div>
					</>
				)}
			</main>
		</div>
	);
}
