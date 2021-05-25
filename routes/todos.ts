import { Router } from 'express'

import { Todo } from '../models/todo'

let todos: Todo[] = []

const router = Router()

router.get('/', (req, res, next) => {
    res.status(200).json({todos})
})

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }
    todos.unshift(newTodo)
    res.status(201).json({todos})
})

router.put('/todo/:id', (req, res, next) => {
    const todoIndex = todos.findIndex(todoItem => todoItem.id === req.params.id)

    if(todoIndex < -1) {
        return res.status(404).json({msg: 'Todo not found'})
    }

    todos[todoIndex] = {
        id: todos[todoIndex].id,
        text: req.body.text
    }

    res.status(200).json({msg: "Updated", todos})
})

router.delete('/todo/:id', (req, res, next) => {
    const todoIndex = todos.findIndex(todoItem => todoItem.id === req.params.id)

    if(todoIndex < -1) {
        return res.status(404).json({msg: 'Todo not found'})
    }

    todos = todos.filter(todo => todo.id !== req.params.id)

    return res.status(200).json({msg: 'Todo deleted', todos})
})

export default router