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
  <div className="no-boards fill-width centered no-text-select">
    <div className="one-third-width flex-column slight-pad" >
      {/* <h2 style={{
        margin: '1rem 0'
      }}>Hey, </h2> */}
      <h2>Welcome to the project planner. </h2>
      <h2 style={{
      }}>Do you have things to do?</h2>
      <div className="hover-text body" style={{
        margin: '2rem 0',
        height: '100px'

      }} >
        <span>Start something</span>
      </div>
    </div >
  </div>
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
  return (
    <div className="kanban fill-container centered container overflow-y-scroll">
      <KanBanSwitchContainer boards={boards} />
    </div>
  )
}