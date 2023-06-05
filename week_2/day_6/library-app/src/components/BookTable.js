import React from 'react'

export default function BookTable() {
  return (
    <div className='p-3'>
        <table className='table table-bordered'>
            <thead>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Actions</th>
            </thead>
        </table>
    </div>
  )
}
