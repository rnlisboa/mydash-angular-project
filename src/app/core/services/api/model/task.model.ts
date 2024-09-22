import { UserModel } from "./user.model"

export interface TaskModel {
    id: number,
    title: string,
    detail: string,
    deadline: Date,
    responsible: Array<UserModel>,
    priority: Priority,
    finished: boolean
}

type Priority = 'Alta' | 'Média' | 'Baixa' 