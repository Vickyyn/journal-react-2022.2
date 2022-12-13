import React from "react"
import { useParams } from "react-router-dom"

const ShowEntry = ({ entries }) => {
  const { id } = useParams()
  const entry = entries[id]

  return entry ? (
    <>
      <h5>{entry.content}</h5>
      <p>Posted in {entry.category}</p>
    </>
  ) : (
    <h4>Entry not found!</h4>
  )
}

export default ShowEntry
