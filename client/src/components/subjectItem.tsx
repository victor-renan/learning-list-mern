import React from "react";

type Props = SubjectProps & {
    updateSubject: (subject: ISubject) => void
    deleteSubject: (_id: string) => void
}

const Subject: React.FC<Props> = ({ subject, updateSubject, deleteSubject }) => {
    const checkSubject: string = subject.status ? "box completed" : "box"
    return (
      <div className={checkSubject}>
        <div className='box__text'>
          <h1 className="box__title">{subject.name}</h1>
          <p className="box__desc">{subject.description}</p>
          <p className="box__desc">{subject.completion}</p>
        </div>
        <div className='box__actions'>
          <button
            onClick={() => updateSubject(subject)}
            className="box__btn update"
          >
            Finalizar
          </button>
          <button
            onClick={() => deleteSubject(subject._id)}
            className="box__btn delete"
          >
            Deletar
          </button>
        </div>
      </div>
    )
  }
  
  export default Subject;