import React from 'react'

export default function Results({results}) {
  return (
    <div>
        {
            results.map((result) => {
                var original_title = result.original_title ? result.original_title : result.original_name;
                return (<div key={result.id}>
                    <h2>{original_title}</h2>
                </div>)
            })
        }
    </div>
  )
}
