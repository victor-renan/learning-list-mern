interface ISubject {
    _id: string
    name: string
    description: string
    completion: string
    status: boolean
}

type SubjectProps = {
    subject: ISubject
}

type ApiDataType = {
    message: string
    status: string
    subjects: ISubject[]
    subject: ISubject
}