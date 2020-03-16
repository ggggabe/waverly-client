import React, { useState } from 'react'
import { useSwitchContainer } from '../../components/HOC'
import Window from '../../components/Window'
import './index.scss'

export const kanbanStub = {
  boards: [
    {
      title: "ToDo",
      cards: [
        {
          title: 'Make KanBan'
        }
      ]
    }
  ]
}

const NoBoards = props => (
  <div className="no-boards fill-width centered flex-column">
    <h2>I bet you have shit to do</h2>
    <div className="hover-text">
      <span>+ Add a board</span>
    </div>
  </div >
)

const Card = () => (
  <div></div>
)

const Board = (props) => {

  return (
    <Window className={`board`} title={props.title} scene={Card} sceneProps={props} />
  )
}

const Boards = ({ boards }) => {
  return (
    <div className='hidescroll-x'>
      <div className='boards'>
        {boards.map((board, key) => <Board key={key} board={board} title={board.title}></Board>)}
      </div >
    </div>
  )
}

const KanBanSwitchContainer = useSwitchContainer(NoBoards, Boards, ({ boards }) => boards && boards.length > 0)

export const KanBanScene = ({ boards }) => {
  console.log({ boards })
  return (
    <div className="kanban fill-container centered container overflow-y-scroll">
      <KanBanSwitchContainer boards={boards} />
    </div>
  )
}