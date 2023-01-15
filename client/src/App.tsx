import React, { useEffect, useState } from 'react';
import SubjectItem from './components/subjectItem';
import AddSubjectForm from './components/addSubjectForm';
import { getSubjects, addSubject, updateSubject, deleteSubject } from './API';
import './App.css';

const App: React.FC = () => {
  const [subjects, setSubjects] = useState<ISubject[]>([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = (): void => {
    getSubjects()
    .then(({data: {subjects}}: ISubject[] | any) => setSubjects(subjects))
    .catch((err: Error) => {console.log(err)});
  };

  const handleSaveSubject = (e: React.FormEvent, formData: ISubject): void => {
    e.preventDefault();
    addSubject(formData)
    .then(({ status, data }) => {
      if (status !== 201) {
        throw new Error("Erro: A matéria não foi adicionada!");
      }
      setSubjects(data.subjects);
    })
    .catch((err: Error) => {
      console.log(err)
    })
  };

  const handleUpdateSubject = (subject: ISubject): void => {
    updateSubject(subject)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Erro: Matéria não atualizada!")
      }
      setSubjects(data.subjects);
    })
    .catch((err) => console.log(err));
  };

  const handleDeleteSubject = (_id: string): void => {
    deleteSubject(_id)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Erro: Matéria não deletada!");
      }
      setSubjects(data.subjects);
    })
    .then((err) => console.log(err));
  };

  return (
    <main className='App'>
      <h1>Minhas matérias</h1>
      <AddSubjectForm saveSubject={handleSaveSubject} />
      {subjects.map((subject: ISubject) => (
        <SubjectItem
          key={subject._id}
          updateSubject={handleUpdateSubject}
          deleteSubject={handleDeleteSubject}
          subject={subject}
        />
      ))}
    </main>
  )
};

export default App;
