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
        <div>
          <label htmlFor='name'>Name:</label>
          <input onChange={handleForm} type='text' name='name' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <input onChange={handleForm} type='text' name='description' id='description' />
        </div>
        <div>
          <label htmlFor='completion'>Completion:</label>
          <input onChange={handleForm} type='text' name='completion' id='completion' />
        </div>
      </div>
      <button>Adicionar</button>
    </form>
  )
}

export default AddSubject