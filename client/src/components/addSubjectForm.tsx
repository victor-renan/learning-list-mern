import React, { useState } from 'react'

type Props = { 
  saveSubject: (e: React.FormEvent, formData: ISubject | any) => void 
}

const AddSubject: React.FC<Props> = ({ saveSubject }) => {
  const [formData, setFormData] = useState<ISubject | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='new-subject-form' onSubmit={(e) => saveSubject(e, formData)}>
        <div>
          <label htmlFor='name'>Nome da matéria:</label>
          <input onChange={handleForm} type='text' name='name' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Descrição:</label>
          <input onChange={handleForm} type='text' name='description' id='description' />
        </div>
        <div>
          <label htmlFor='completion'>Data de finalização:</label>
          <input onChange={handleForm} type='text' name='completion' id='completion' />
        </div>
        <div>
          <button>Adicionar</button>
        </div>
    </form>
  )
}

export default AddSubject